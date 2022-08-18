'reach 0.1';

const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handAlice, handBob) => (handAlice + (4 - handBob)) % 3;

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, (handAlice) =>
	forall(UInt, (handBob) => assert(isOutcome(winner(handAlice, handBob))))
);

forall(UInt, (hand) => assert(winner(hand, hand) == DRAW));

const Player = {
	...hasRandom,
	getHand: Fun([], UInt),
	seeOutcome: Fun([UInt], Null),
	informTimeout: Fun([], Null),
};

export const rps = Reach.App(() => {
	const Alice = Participant('Alice', {
		...Player,
		wager: UInt, // atomic units of currency
		deadline: UInt, // time delta (blocks/rounds)
	});
	const Bob = Participant('Bob', {
		...Player,
		acceptWager: Fun([UInt], Null),
	});
	init();

	const informTimeout = () => {
		each([Alice, Bob], () => {
			interact.informTimeout();
		});
	};

	Alice.only(() => {
		const wager = declassify(interact.wager);
		const deadline = declassify(interact.deadline);
	});
	Alice.publish(wager, deadline).pay(wager);
	commit();

	Bob.only(() => {
		interact.acceptWager(wager);
	});
	Bob.pay(wager).timeout(relativeTime(deadline), () =>
		closeTo(Alice, informTimeout)
	);

	var outcome = DRAW;
	invariant(balance() == 2 * wager && isOutcome(outcome));
	while (outcome == DRAW) {
		commit();

		Alice.only(() => {
			const _handAlice = interact.getHand();
			const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
			const commitAlice = declassify(_commitAlice);
		});
		Alice.publish(commitAlice).timeout(relativeTime(deadline), () =>
			closeTo(Bob, informTimeout)
		);
		commit();

		unknowable(Bob, Alice(_handAlice, _saltAlice));
		Bob.only(() => {
			const handBob = declassify(interact.getHand());
		});
		Bob.publish(handBob).timeout(relativeTime(deadline), () =>
			closeTo(Alice, informTimeout)
		);
		commit();

		Alice.only(() => {
			const saltAlice = declassify(_saltAlice);
			const handAlice = declassify(_handAlice);
		});
		Alice.publish(saltAlice, handAlice).timeout(relativeTime(deadline), () =>
			closeTo(Bob, informTimeout)
		);
		checkCommitment(commitAlice, saltAlice, handAlice);

		outcome = winner(handAlice, handBob);
		continue;
	}

	assert(outcome == A_WINS || outcome == B_WINS);
	transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
	commit();

	each([Alice, Bob], () => {
		interact.seeOutcome(outcome);
	});
});

const [isMORRAOutcome, MA_WINS, MB_WINS, MDRAW] = makeEnum(3);
const MORRAdeadline = 30;

const MORRAwinner = (totalFingers, aliceGuess, bobGuess) => {
	if (bobGuess === aliceGuess) {
		return MDRAW;
	} else if (totalFingers === bobGuess) {
		return MB_WINS;
	} else if (totalFingers === aliceGuess) {
		return MA_WINS;
	} else {
		return MDRAW;
	}
};
// params total alice bob
// assert(winner(9, 0, 9) == B_WINS);
// assert(winner(9, 9, 0) == A_WINS);
// assert(winner(1, 0, 9) == DRAW);
// assert(winner(10, 10, 10) == DRAW);

// forall(UInt, (total) =>
// 	forall(UInt, (aliceGuess) =>
// 		forall(UInt, (bobGuess) =>
// 			assert(isOutcome(winner(total, aliceGuess, bobGuess)))
// 		)
// 	)
// );

forall(UInt, (total) =>
	forall(UInt, (incorrectGuess) =>
		total == incorrectGuess
			? assert(MORRAwinner(total, incorrectGuess, total) == MDRAW)
			: assert(MORRAwinner(total, incorrectGuess, total) == MB_WINS)
	)
);
forall(UInt, (total) =>
	forall(UInt, (incorrectGuess) =>
		total != incorrectGuess
			? assert(MORRAwinner(total, total, incorrectGuess) == MA_WINS)
			: null
	)
);
const MORRAplayer = {
	...hasRandom,
	getFingersAndGuess: Fun([], Tuple(UInt, UInt)),
	seeOutcome: Fun([UInt], Null),
	informTimeout: Fun([], Null),
};

export const morra = Reach.App(() => {
	const Alice = Participant('Alice', {
		...MORRAplayer,
		wager: UInt,
	});
	const Bob = Participant('Bob', {
		...MORRAplayer,
		acceptWager: Fun([UInt], Null),
	});
	init();

	const informTimeout = () => {
		each([Alice, Bob], () => {
			interact.informTimeout();
		});
	};

	Alice.only(() => {
		const wager = declassify(interact.wager);
	});
	Alice.publish(wager).pay(wager);
	commit();

	Bob.only(() => {
		interact.acceptWager(wager);
	});
	Bob.publish().pay(wager);

	var outcome = MDRAW;
	invariant(balance() == 2 * wager);
	while (outcome == MDRAW) {
		commit();

		Alice.only(() => {
			const [_aliceFingers, _aliceGuess] = interact.getFingersAndGuess();

			const [_commitA, _saltA] = makeCommitment(interact, _aliceFingers);
			const commitA = declassify(_commitA);

			const [_guessCommitA, _guessSaltA] = makeCommitment(
				interact,
				_aliceGuess
			);
			const guessCommitA = declassify(_guessCommitA);
		});
		Alice.publish(commitA, guessCommitA).timeout(
			relativeTime(MORRAdeadline),
			() => closeTo(Bob, informTimeout)
		);
		commit();

		Bob.only(() => {
			const [bobFingers, bobGuess] = declassify(interact.getFingersAndGuess());
		});
		Bob.publish(bobFingers, bobGuess).timeout(relativeTime(MORRAdeadline), () =>
			closeTo(Alice, informTimeout)
		);
		commit();

		Alice.only(() => {
			const [saltA, aliceFingers] = declassify([_saltA, _aliceFingers]);
			const [guessSaltA, aliceGuess] = declassify([_guessSaltA, _aliceGuess]);
		});
		Alice.publish(saltA, aliceFingers, guessSaltA, aliceGuess).timeout(
			relativeTime(MORRAdeadline),
			() => closeTo(Bob, informTimeout)
		);
		checkCommitment(commitA, saltA, aliceFingers);
		checkCommitment(guessCommitA, guessSaltA, aliceGuess);
		commit();

		Alice.publish();
		const totalFingers = aliceFingers + bobFingers;
		outcome = MORRAwinner(totalFingers, aliceGuess, bobGuess);
		continue;
	}

	transfer(balance()).to(outcome == MA_WINS ? Alice : Bob);
	commit();

	each([Alice, Bob], () => {
		interact.seeOutcome(outcome);
	});

	exit();
});
