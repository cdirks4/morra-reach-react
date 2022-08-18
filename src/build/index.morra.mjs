// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc0, ctc1, ctc1],
      6: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc1],
      8: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      10: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Null;
  
  
  const v341 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v341],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:172:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v341, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v345], secs: v347, time: v346, didSend: v87, from: v344 } = txn1;
      
      sim_r.txns.push({
        amt: v345,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v345], secs: v347, time: v346, didSend: v87, from: v344 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v354, time: v353, didSend: v96, from: v352 } = txn2;
  const v356 = stdlib.safeAdd(v345, v345);
  ;
  let v357 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v358 = v353;
  let v365 = v356;
  
  while (await (async () => {
    const v369 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    
    return v369;})()) {
    const v376 = stdlib.safeAdd(v358, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
    const v380 = stdlib.protect(ctc1, await interact.getFingersAndGuess(), {
      at: './index.rsh:186:89:application',
      fs: ['at ./index.rsh:185:27:application call to [unknown function] (defined at: ./index.rsh:185:31:function exp)'],
      msg: 'getFingersAndGuess',
      who: 'Alice'
      });
    const v381 = v380[stdlib.checkedBigNumberify('./index.rsh:186:89:application', stdlib.UInt_max, '0')];
    const v382 = v380[stdlib.checkedBigNumberify('./index.rsh:186:89:application', stdlib.UInt_max, '1')];
    const v385 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:188:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:185:27:application call to [unknown function] (defined at: ./index.rsh:185:31:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v386 = stdlib.digest(ctc1, [v385, v381]);
    const v388 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:191:76:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:185:27:application call to [unknown function] (defined at: ./index.rsh:185:31:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v389 = stdlib.digest(ctc1, [v388, v382]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v344, v352, v365, v376, v386, v389],
      evt_cnt: 2,
      funcNum: 3,
      lct: v358,
      onlyIf: true,
      out_tys: [ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:197:23:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v392, v393], secs: v395, time: v394, didSend: v126, from: v391 } = txn3;
        
        ;
        const v403 = stdlib.safeAdd(v394, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v376],
      tys: [ctc3, ctc3, ctc0, ctc0, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v344, v352, v365, v376],
        evt_cnt: 0,
        funcNum: 4,
        lct: v358,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v487, time: v486, didSend: v257, from: v485 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v352,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v487, time: v486, didSend: v257, from: v485 } = txn4;
      ;
      const v488 = stdlib.addressEq(v344, v485);
      const v489 = stdlib.addressEq(v352, v485);
      const v490 = v488 ? true : v489;
      stdlib.assert(v490, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:199:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc4, await interact.informTimeout(), {
        at: './index.rsh:165:47:application',
        fs: ['at ./index.rsh:164:21:application call to [unknown function] (defined at: ./index.rsh:164:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:163:34:function exp)', 'at ./index.rsh:199:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v392, v393], secs: v395, time: v394, didSend: v126, from: v391 } = txn3;
      ;
      const v396 = stdlib.addressEq(v344, v391);
      stdlib.assert(v396, {
        at: './index.rsh:197:23:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v403 = stdlib.safeAdd(v394, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v403],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v344, v352, v365, v392, v393, v403],
          evt_cnt: 0,
          funcNum: 6,
          lct: v394,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v469, time: v468, didSend: v223, from: v467 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v344,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v469, time: v468, didSend: v223, from: v467 } = txn5;
        ;
        const v470 = stdlib.addressEq(v344, v467);
        const v471 = stdlib.addressEq(v352, v467);
        const v472 = v470 ? true : v471;
        stdlib.assert(v472, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:207:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:165:47:application',
          fs: ['at ./index.rsh:164:21:application call to [unknown function] (defined at: ./index.rsh:164:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:163:34:function exp)', 'at ./index.rsh:207:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v413, v414], secs: v416, time: v415, didSend: v141, from: v412 } = txn4;
        ;
        const v417 = stdlib.addressEq(v352, v412);
        stdlib.assert(v417, {
          at: './index.rsh:206:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v424 = stdlib.safeAdd(v415, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.sendrecv({
          args: [v344, v352, v365, v392, v393, v413, v414, v424, v385, v381, v388, v382],
          evt_cnt: 4,
          funcNum: 7,
          lct: v415,
          onlyIf: true,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:215:23:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v429, v430, v431, v432], secs: v434, time: v433, didSend: v153, from: v428 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v424],
          tys: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v344, v352, v365, v392, v393, v413, v414, v424],
            evt_cnt: 0,
            funcNum: 8,
            lct: v415,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v451, time: v450, didSend: v189, from: v449 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v451, time: v450, didSend: v189, from: v449 } = txn6;
          ;
          const v452 = stdlib.addressEq(v344, v449);
          const v453 = stdlib.addressEq(v352, v449);
          const v454 = v452 ? true : v453;
          stdlib.assert(v454, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:217:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:165:47:application',
            fs: ['at ./index.rsh:164:21:application call to [unknown function] (defined at: ./index.rsh:164:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:163:34:function exp)', 'at ./index.rsh:217:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v429, v430, v431, v432], secs: v434, time: v433, didSend: v153, from: v428 } = txn5;
          ;
          const v435 = stdlib.addressEq(v344, v428);
          stdlib.assert(v435, {
            at: './index.rsh:215:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v436 = stdlib.digest(ctc1, [v429, v430]);
          const v437 = stdlib.digestEq(v392, v436);
          stdlib.assert(v437, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:219:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v438 = stdlib.digest(ctc1, [v431, v432]);
          const v439 = stdlib.digestEq(v393, v438);
          stdlib.assert(v439, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:220:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v344, v352, v365, v413, v414, v430, v432],
            evt_cnt: 0,
            funcNum: 9,
            lct: v433,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:223:23:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v442, time: v441, didSend: v164, from: v440 } = txn6;
              
              ;
              const v444 = stdlib.safeAdd(v430, v413);
              let v445;
              const v446 = stdlib.eq(v414, v432);
              if (v446) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v447 = stdlib.eq(v444, v414);
                if (v447) {
                  v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  const v448 = stdlib.eq(v444, v432);
                  if (v448) {
                    v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  else {
                    v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  }
                }
              const cv357 = v445;
              const cv358 = v441;
              const cv365 = v365;
              
              await (async () => {
                const v357 = cv357;
                const v358 = cv358;
                const v365 = cv365;
                
                if (await (async () => {
                  const v369 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  
                  return v369;})()) {
                  const v376 = stdlib.safeAdd(v358, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v505 = v504 ? v344 : v352;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v505,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v442, time: v441, didSend: v164, from: v440 } = txn6;
          ;
          const v443 = stdlib.addressEq(v344, v440);
          stdlib.assert(v443, {
            at: './index.rsh:223:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v444 = stdlib.safeAdd(v430, v413);
          let v445;
          const v446 = stdlib.eq(v414, v432);
          if (v446) {
            v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            const v447 = stdlib.eq(v444, v414);
            if (v447) {
              v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v448 = stdlib.eq(v444, v432);
              if (v448) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              }
            }
          const cv357 = v445;
          const cv358 = v441;
          const cv365 = v365;
          
          v357 = cv357;
          v358 = cv358;
          v365 = cv365;
          
          continue;
          
          }
        
        }
      
      }
    
    }
  const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v505 = v504 ? v344 : v352;
  ;
  stdlib.protect(ctc4, await interact.seeOutcome(v357), {
    at: './index.rsh:233:36:application',
    fs: ['at ./index.rsh:232:13:application call to [unknown function] (defined at: ./index.rsh:232:31:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v345], secs: v347, time: v346, didSend: v87, from: v344 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v345), {
    at: './index.rsh:176:37:application',
    fs: ['at ./index.rsh:175:17:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v344, v345],
    evt_cnt: 0,
    funcNum: 1,
    lct: v346,
    onlyIf: true,
    out_tys: [],
    pay: [v345, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v354, time: v353, didSend: v96, from: v352 } = txn2;
      
      const v356 = stdlib.safeAdd(v345, v345);
      sim_r.txns.push({
        amt: v345,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v357 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v358 = v353;
      const v365 = v356;
      
      if (await (async () => {
        const v369 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        
        return v369;})()) {
        const v376 = stdlib.safeAdd(v358, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        }
      else {
        const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v505 = v504 ? v344 : v352;
        sim_r.txns.push({
          kind: 'from',
          to: v505,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v354, time: v353, didSend: v96, from: v352 } = txn2;
  const v356 = stdlib.safeAdd(v345, v345);
  ;
  let v357 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v358 = v353;
  let v365 = v356;
  
  while (await (async () => {
    const v369 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    
    return v369;})()) {
    const v376 = stdlib.safeAdd(v358, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc2],
      timeoutAt: ['time', v376],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v344, v352, v365, v376],
        evt_cnt: 0,
        funcNum: 4,
        lct: v358,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v487, time: v486, didSend: v257, from: v485 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v352,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v487, time: v486, didSend: v257, from: v485 } = txn4;
      ;
      const v488 = stdlib.addressEq(v344, v485);
      const v489 = stdlib.addressEq(v352, v485);
      const v490 = v488 ? true : v489;
      stdlib.assert(v490, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:199:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:165:47:application',
        fs: ['at ./index.rsh:164:21:application call to [unknown function] (defined at: ./index.rsh:164:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:163:34:function exp)', 'at ./index.rsh:199:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v392, v393], secs: v395, time: v394, didSend: v126, from: v391 } = txn3;
      ;
      const v396 = stdlib.addressEq(v344, v391);
      stdlib.assert(v396, {
        at: './index.rsh:197:23:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v403 = stdlib.safeAdd(v394, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
      const v407 = stdlib.protect(ctc3, await interact.getFingersAndGuess(), {
        at: './index.rsh:204:94:application',
        fs: ['at ./index.rsh:203:25:application call to [unknown function] (defined at: ./index.rsh:203:29:function exp)'],
        msg: 'getFingersAndGuess',
        who: 'Bob'
        });
      const v408 = v407[stdlib.checkedBigNumberify('./index.rsh:204:94:application', stdlib.UInt_max, '0')];
      const v409 = v407[stdlib.checkedBigNumberify('./index.rsh:204:94:application', stdlib.UInt_max, '1')];
      
      const txn4 = await (ctc.sendrecv({
        args: [v344, v352, v365, v392, v393, v403, v408, v409],
        evt_cnt: 2,
        funcNum: 5,
        lct: v394,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:206:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v413, v414], secs: v416, time: v415, didSend: v141, from: v412 } = txn4;
          
          ;
          const v424 = stdlib.safeAdd(v415, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v403],
        tys: [ctc4, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v344, v352, v365, v392, v393, v403],
          evt_cnt: 0,
          funcNum: 6,
          lct: v394,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v469, time: v468, didSend: v223, from: v467 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v344,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc4, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v469, time: v468, didSend: v223, from: v467 } = txn5;
        ;
        const v470 = stdlib.addressEq(v344, v467);
        const v471 = stdlib.addressEq(v352, v467);
        const v472 = v470 ? true : v471;
        stdlib.assert(v472, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:207:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:165:47:application',
          fs: ['at ./index.rsh:164:21:application call to [unknown function] (defined at: ./index.rsh:164:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:163:34:function exp)', 'at ./index.rsh:207:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v413, v414], secs: v416, time: v415, didSend: v141, from: v412 } = txn4;
        ;
        const v417 = stdlib.addressEq(v352, v412);
        stdlib.assert(v417, {
          at: './index.rsh:206:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v424 = stdlib.safeAdd(v415, stdlib.checkedBigNumberify('./index.rsh:104:23:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 7,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          timeoutAt: ['time', v424],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v344, v352, v365, v392, v393, v413, v414, v424],
            evt_cnt: 0,
            funcNum: 8,
            lct: v415,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v451, time: v450, didSend: v189, from: v449 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v451, time: v450, didSend: v189, from: v449 } = txn6;
          ;
          const v452 = stdlib.addressEq(v344, v449);
          const v453 = stdlib.addressEq(v352, v449);
          const v454 = v452 ? true : v453;
          stdlib.assert(v454, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:217:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:165:47:application',
            fs: ['at ./index.rsh:164:21:application call to [unknown function] (defined at: ./index.rsh:164:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:163:34:function exp)', 'at ./index.rsh:217:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v429, v430, v431, v432], secs: v434, time: v433, didSend: v153, from: v428 } = txn5;
          ;
          const v435 = stdlib.addressEq(v344, v428);
          stdlib.assert(v435, {
            at: './index.rsh:215:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v436 = stdlib.digest(ctc3, [v429, v430]);
          const v437 = stdlib.digestEq(v392, v436);
          stdlib.assert(v437, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:219:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v438 = stdlib.digest(ctc3, [v431, v432]);
          const v439 = stdlib.digestEq(v393, v438);
          stdlib.assert(v439, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:220:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v442, time: v441, didSend: v164, from: v440 } = txn6;
          ;
          const v443 = stdlib.addressEq(v344, v440);
          stdlib.assert(v443, {
            at: './index.rsh:223:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v444 = stdlib.safeAdd(v430, v413);
          let v445;
          const v446 = stdlib.eq(v414, v432);
          if (v446) {
            v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            const v447 = stdlib.eq(v444, v414);
            if (v447) {
              v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v448 = stdlib.eq(v444, v432);
              if (v448) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              }
            }
          const cv357 = v445;
          const cv358 = v441;
          const cv365 = v365;
          
          v357 = cv357;
          v358 = cv358;
          v365 = cv365;
          
          continue;
          
          }
        
        }
      
      }
    
    }
  const v504 = stdlib.eq(v357, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v505 = v504 ? v344 : v352;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v357), {
    at: './index.rsh:233:36:application',
    fs: ['at ./index.rsh:232:13:application call to [unknown function] (defined at: ./index.rsh:232:31:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAEIQAIGBEiIAR4FCQqYAQMmAwEAAQEAIjUAMRhBBNcqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQAKcSYEHDEABoUkkDEAA30khCwxAAIYhCxJEIQw0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf+BUFs1/oFgWzX9gASiBWaOsDT/MQASRDQDgVhbNAMhB1sINfw0/jT9EkEAByEENftCACA0/DT+EkEABiM1+0IAEjT8NP0SQQAGIjX7QgAEIQQ1+zT/NANXICA0+zIGNAMlW0IDbEgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXICA1/4AEF/zbLrAyBjQDIQ1bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCA21IJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpJVwAgNf9XICA1/iVbNf0hCFs1/IGQAVs1+0k1BUlKIls1+iRbNfmBEFs1+IEYWzX3gARAKnUwNPoWUDT5FlA0+BZQNPcWULAyBjQDIQ1bDEQ0/zEAEkQ0A1dIIDT6FjT5FlABEkQ0A1doIDT4FjT3FlABEkQ0/zT+UDT9FlA0/BZQNPsWUDT5FlA09xZQKEsBVwBoZ0ghDDUBMgY1AkICzUkhBQxAAFNIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gARhtKwMsDIGNAMhCFsPRDT/MQASNANXICAxABIRRLEisgE0AyVbsggjshA0/7IHs0ICV0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpJVwAgNf9XICA1/iVbNf1XSCA1/FdoIDX7STUFSSJbNfokWzX5gASzUfePNPoWUDT5FlCwMgY0AyEIWwxENP4xABJEMgYhCQg1+DT/NP5QNP0WUDT8UDT7UDT6FlA0+RZQNPgWUChLAVcAf2cpSwFXfyFnSCQ1ATIGNQJCAdlJIQ4MQADcSSEGDEAAUEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf+ABJEnNPOwMgY0AyEHWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgFfSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4lWzX9STUFSVcAIDX8VyAgNfuABB5uguM0/FA0+1CwMgY0AyEHWwxENP8xABJEMgYhCQg1+jT/NP5QNP0WUDT8UDT7UDT6FlAoSwFXAH9nKUsBV38RZ0ghBTUBMgY1AkIA9kkjDEAAOyMSRCM0ARJENARJIhJMNAISEUQoZEk1A4EgWzX/gASai5F0sDT/iAEZNANXACAxACEEMgY0/0kIQgBGSIGgjQaIAP8iNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gA2TEANP8WUChLAVcAKGdIIzUBMgY1AkIAbzX/Nf41/TX8Nfs0/SEEEkEAJzT+IQkINfo0+zT8UDT/FlA0+hZQKEsBVwBQZ0ghBjUBMgY1AkIANrEisgE0/7III7IQNPw0+zT9IhJNsgezQgAAMRkhChJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEOMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 160,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v392",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v393",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v429",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v431",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v432",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v392",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v393",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v429",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v431",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v432",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c1e38038062001c1e8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61197080620002ae6000396000f3fe60806040526004361061009a5760003560e01c8063ab53f2c611610061578063ab53f2c614610115578063ad2d91d114610138578063aff5115f1461014b578063c79800371461015e578063de73699814610171578063e533a29d1461018457005b80631e93b0f1146100a35780632c10a159146100c75780633a825029146100da57806383230757146100ed578063a7661d541461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046114d6565b610197565b6100a16100e83660046114ee565b610305565b3480156100f957600080fd5b506001546100b4565b6100a16101103660046114d6565b610620565b34801561012157600080fd5b5061012a6107d6565b6040516100be929190611500565b6100a161014636600461156f565b610873565b6100a161015936600461156f565b610acd565b6100a161016c3660046114d6565b610d3a565b6100a161017f3660046114d6565b610ed1565b6100a16101923660046114d6565b6110d7565b6101a7600160005414600961122d565b6101c1813515806101ba57506001548235145b600a61122d565b6000808055600280546101d390611592565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611592565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906115e3565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610297929190611648565b60405180910390a16102b081602001513414600861122d565b6102b86113b5565b815181516001600160a01b0390911690528051336020918201528082018051600290525143908201528201516102ee9080611253565b602082015160400152610300816112a6565b505050565b610315600860005414602361122d565b61032f8135158061032857506001548235145b602461122d565b60008080556002805461034190611592565b80601f016020809104026020016040519081016040528092919081815260200182805461036d90611592565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b50505050508060200190518101906103d29190611685565b90506103e58160e001514310602561122d565b604080513381528335602080830191909152840135818301529083013560608083019190915283013560808083019190915283013560a08201527fb5f4492f0483ed233efaa2cb34f0ab323e6b41dcb420ae73ce00030dbfd06b489060c00160405180910390a16104583415601f61122d565b8051610470906001600160a01b03163314602061122d565b604080516104bc9161049691602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826060015114602161122d565b60408051606084810135602083015260808501359282019290925261050291016040516020818303038152906040528051906020012060001c826080015114602261122d565b6105546040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116808352602080850151831681850190815260408087015181870190815260a0808901516060808a0191825260c0808c01516080808d019182528e880135868e019081528f820135848f01908152600a6000554360015589519b8c019c909c529851909b1696890196909652935190870152519685019690965290519483019490945251928101929092525160e0820152610100015b6040516020818303038152906040526002908051906020019061061a929190611400565b50505050565b610630600460005414601261122d565b61064a8135158061064357506001548235145b601361122d565b60008080556002805461065c90611592565b80601f016020809104026020016040519081016040528092919081815260200182805461068890611592565b80156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b50505050508060200190518101906106ed9190611731565b90506107018160600151431015601461122d565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610732929190611648565b60405180910390a16107463415601061122d565b805161077a906001600160a01b031633146107705760208201516001600160a01b03163314610773565b60015b601161122d565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156107bb573d6000803e3d6000fd5b50600080805560018190556107d290600290611484565b5050565b6000606060005460028080546107eb90611592565b80601f016020809104026020016040519081016040528092919081815260200182805461081790611592565b80156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b50505050509050915091509091565b610883600460005414600d61122d565b61089d8135158061089657506001548235145b600e61122d565b6000808055600280546108af90611592565b80601f01602080910402602001604051908101604052809291908181526020018280546108db90611592565b80156109285780601f106108fd57610100808354040283529160200191610928565b820191906000526020600020905b81548152906001019060200180831161090b57829003601f168201915b50505050508060200190518101906109409190611731565b90506109586040518060200160405280600081525090565b61096982606001514310600f61122d565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634338460405161099a9291906117b1565b60405180910390a16109ae3415600b61122d565b81516109c6906001600160a01b03163314600c61122d565b6109d143601e611253565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811682526020808501519091168183015260408085015181840152858201356060840152858101356080840152835160a084015260066000554360015551610aa29183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b60405160208183030381529060405260029080519060200190610ac6929190611400565b5050505050565b610add600660005414601761122d565b610af781351580610af057506001548235145b601861122d565b600080805560028054610b0990611592565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3590611592565b8015610b825780601f10610b5757610100808354040283529160200191610b82565b820191906000526020600020905b815481529060010190602001808311610b6557829003601f168201915b5050505050806020019051810190610b9a91906117e2565b9050610bb26040518060200160405280600081525090565b610bc38260a001514310601961122d565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663384604051610bf49291906117b1565b60405180910390a1610c083415601561122d565b6020820151610c23906001600160a01b03163314601661122d565b610c2e43601e611253565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151909116818301526040808501518184015260608086015190840152608080860151908401528582013560a08401528581013560c0840152835160e084015260086000554360015551610aa29183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b610d4a600660005414601c61122d565b610d6481351580610d5d57506001548235145b601d61122d565b600080805560028054610d7690611592565b80601f0160208091040260200160405190810160405280929190818152602001828054610da290611592565b8015610def5780601f10610dc457610100808354040283529160200191610def565b820191906000526020600020905b815481529060010190602001808311610dd257829003601f168201915b5050505050806020019051810190610e0791906117e2565b9050610e1b8160a00151431015601e61122d565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610e4c929190611648565b60405180910390a1610e603415601a61122d565b8051610e94906001600160a01b03163314610e8a5760208201516001600160a01b03163314610e8d565b60015b601b61122d565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107bb573d6000803e3d6000fd5b610ee1600a60005414602d61122d565b610efb81351580610ef457506001548235145b602e61122d565b600080805560028054610f0d90611592565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3990611592565b8015610f865780601f10610f5b57610100808354040283529160200191610f86565b820191906000526020600020905b815481529060010190602001808311610f6957829003601f168201915b5050505050806020019051810190610f9e9190611876565b9050610fbd604051806040016040528060008152602001600081525090565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3384604051610fee929190611648565b60405180910390a16110023415602b61122d565b815161101a906001600160a01b03163314602c61122d565b61102c8260a001518360600151611253565b815260c08201516080830151141561104a5760026020820152611084565b6080820151815114156110635760016020820152611084565b60c08201518151141561107c5760006020820152611084565b600260208201525b61108c6113b5565b825181516001600160a01b0391821690526020808501518351921691810191909152828101518183018051919091528051439201919091526040808501519151015261061a816112a6565b6110e7600860005414602861122d565b611101813515806110fa57506001548235145b602961122d565b60008080556002805461111390611592565b80601f016020809104026020016040519081016040528092919081815260200182805461113f90611592565b801561118c5780601f106111615761010080835404028352916020019161118c565b820191906000526020600020905b81548152906001019060200180831161116f57829003601f168201915b50505050508060200190518101906111a49190611685565b90506111b88160e00151431015602a61122d565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633836040516111e9929190611648565b60405180910390a16111fd3415602661122d565b805161077a906001600160a01b031633146112275760208201516001600160a01b0316331461122a565b60015b60275b816107d25760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826112608382611914565b91508110156112a05760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161124a565b92915050565b6040805160208101909152600081526020820151516002141561135b576112d6826020015160200151601e611253565b815260408051608080820183526000808352602080840182815284860183815260608087018581528a51516001600160a01b03908116808a528c51870151821686528c8701518b015185528b5183526004909755436001558951958601969096529251909416968301969096529451918101919091529251908301529060a0016105f6565b6020820151511561137157815160200151611375565b8151515b6001600160a01b03166108fc8360200151604001519081150290604051600060405180830381858888f193505050501580156107bb573d6000803e3d6000fd5b604080516080810182526000918101828152606082019290925290819081526020016113fb60405180606001604052806000815260200160008152602001600081525090565b905290565b82805461140c90611592565b90600052602060002090601f01602090048101928261142e5760008555611474565b82601f1061144757805160ff1916838001178555611474565b82800160010185558215611474579182015b82811115611474578251825591602001919060010190611459565b506114809291506114c1565b5090565b50805461149090611592565b6000825580601f106114a0575050565b601f0160209004906000526020600020908101906114be91906114c1565b50565b5b8082111561148057600081556001016114c2565b6000604082840312156114e857600080fd5b50919050565b600060a082840312156114e857600080fd5b82815260006020604081840152835180604085015260005b8181101561153457858101830151858201606001528201611518565b81811115611546576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156114e857600080fd5b60006060828403121561158157600080fd5b61158b838361155d565b9392505050565b600181811c908216806115a657607f821691505b602082108114156114e857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146115de57600080fd5b919050565b6000604082840312156115f557600080fd5b6040516040810181811067ffffffffffffffff8211171561162657634e487b7160e01b600052604160045260246000fd5b604052611632836115c7565b8152602083015160208201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461167657600080fd5b80604085015250509392505050565b600061010080838503121561169957600080fd5b6040519081019067ffffffffffffffff821181831017156116ca57634e487b7160e01b600052604160045260246000fd5b816040526116d7846115c7565b81526116e5602085016115c7565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b60006080828403121561174357600080fd5b6040516080810181811067ffffffffffffffff8211171561177457634e487b7160e01b600052604160045260246000fd5b604052611780836115c7565b815261178e602084016115c7565b602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681526080810161158b60208301848035825260208082013590830152604090810135910152565b600060c082840312156117f457600080fd5b60405160c0810181811067ffffffffffffffff8211171561182557634e487b7160e01b600052604160045260246000fd5b604052611831836115c7565b815261183f602084016115c7565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561188857600080fd5b60405160e0810181811067ffffffffffffffff821117156118b957634e487b7160e01b600052604160045260246000fd5b6040526118c5836115c7565b81526118d3602084016115c7565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6000821982111561193557634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220d64744398ab548acf9ca9113a55ee944f3e4905ffbe0aa094002dac51419d68d64736f6c634300080c0033`,
  BytecodeLen: 7198,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:173:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:230:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:183:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:199:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:201:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:207:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:209:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:217:38:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:221:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
