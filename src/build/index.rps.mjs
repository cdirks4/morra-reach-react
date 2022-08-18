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
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v942 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v943 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v943, v942],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v943, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v947, v948], secs: v950, time: v949, didSend: v674, from: v946 } = txn1;
      
      sim_r.txns.push({
        amt: v947,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v959 = stdlib.safeAdd(v949, v948);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v947, v948], secs: v950, time: v949, didSend: v674, from: v946 } = txn1;
  ;
  const v959 = stdlib.safeAdd(v949, v948);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v959],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v946, v947, v948, v959],
      evt_cnt: 0,
      funcNum: 2,
      lct: v949,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1113, time: v1112, didSend: v871, from: v1111 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v946,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1113, time: v1112, didSend: v871, from: v1111 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:39:47:application',
      fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:54:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v965, time: v964, didSend: v683, from: v963 } = txn2;
    const v967 = stdlib.safeAdd(v947, v947);
    ;
    let v968 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v969 = v964;
    let v976 = v967;
    
    while (await (async () => {
      const v984 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v984;})()) {
      const v991 = stdlib.safeAdd(v969, v948);
      const v995 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:63:60:application',
        fs: ['at ./index.rsh:62:27:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v996 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:64:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:62:27:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v997 = stdlib.digest(ctc1, [v996, v995]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v946, v947, v948, v963, v976, v991, v997],
        evt_cnt: 1,
        funcNum: 4,
        lct: v969,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:67:23:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1000], secs: v1002, time: v1001, didSend: v709, from: v999 } = txn3;
          
          ;
          const v1010 = stdlib.safeAdd(v1001, v948);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v991],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v946, v947, v948, v963, v976, v991],
          evt_cnt: 0,
          funcNum: 5,
          lct: v969,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1079, time: v1078, didSend: v824, from: v1077 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v963,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1079, time: v1078, didSend: v824, from: v1077 } = txn4;
        ;
        const v1080 = stdlib.addressEq(v946, v1077);
        const v1081 = stdlib.addressEq(v963, v1077);
        const v1082 = v1080 ? true : v1081;
        stdlib.assert(v1082, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:68:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:39:47:application',
          fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:68:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v1000], secs: v1002, time: v1001, didSend: v709, from: v999 } = txn3;
        ;
        const v1003 = stdlib.addressEq(v946, v999);
        stdlib.assert(v1003, {
          at: './index.rsh:67:23:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1010 = stdlib.safeAdd(v1001, v948);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v1010],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v946, v947, v948, v963, v976, v1000, v1010],
            evt_cnt: 0,
            funcNum: 7,
            lct: v1001,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1061, time: v1060, didSend: v790, from: v1059 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v946,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1061, time: v1060, didSend: v790, from: v1059 } = txn5;
          ;
          const v1062 = stdlib.addressEq(v946, v1059);
          const v1063 = stdlib.addressEq(v963, v1059);
          const v1064 = v1062 ? true : v1063;
          stdlib.assert(v1064, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:77:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:39:47:application',
            fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:77:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v1016], secs: v1018, time: v1017, didSend: v719, from: v1015 } = txn4;
          ;
          const v1019 = stdlib.addressEq(v963, v1015);
          stdlib.assert(v1019, {
            at: './index.rsh:76:21:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v1026 = stdlib.safeAdd(v1017, v948);
          const txn5 = await (ctc.sendrecv({
            args: [v946, v947, v948, v963, v976, v1000, v1016, v1026, v996, v995],
            evt_cnt: 2,
            funcNum: 8,
            lct: v1017,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:85:23:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v1031, v1032], secs: v1034, time: v1033, didSend: v729, from: v1030 } = txn5;
              
              ;
              const v1038 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:6:54:decimal', stdlib.UInt_max, '4'), v1016);
              const v1039 = stdlib.safeAdd(v1032, v1038);
              const v1040 = stdlib.safeMod(v1039, stdlib.checkedBigNumberify('./index.rsh:6:70:decimal', stdlib.UInt_max, '3'));
              const cv968 = v1040;
              const cv969 = v1033;
              const cv976 = v976;
              
              await (async () => {
                const v968 = cv968;
                const v969 = cv969;
                const v976 = cv976;
                
                if (await (async () => {
                  const v984 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v984;})()) {
                  const v991 = stdlib.safeAdd(v969, v948);
                  sim_r.isHalt = false;
                  }
                else {
                  const v1095 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v1098 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:95:18:decimal', stdlib.UInt_max, '2'), v947);
                  const v1100 = v1095 ? v946 : v963;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1100,
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
            timeoutAt: ['time', v1026],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v946, v947, v948, v963, v976, v1000, v1016, v1026],
              evt_cnt: 0,
              funcNum: 9,
              lct: v1017,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v1043, time: v1042, didSend: v756, from: v1041 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v963,
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
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v1043, time: v1042, didSend: v756, from: v1041 } = txn6;
            ;
            const v1044 = stdlib.addressEq(v946, v1041);
            const v1045 = stdlib.addressEq(v963, v1041);
            const v1046 = v1044 ? true : v1045;
            stdlib.assert(v1046, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:86:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:39:47:application',
              fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:86:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v1031, v1032], secs: v1034, time: v1033, didSend: v729, from: v1030 } = txn5;
            ;
            const v1035 = stdlib.addressEq(v946, v1030);
            stdlib.assert(v1035, {
              at: './index.rsh:85:23:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v1036 = stdlib.digest(ctc1, [v1031, v1032]);
            const v1037 = stdlib.digestEq(v1000, v1036);
            stdlib.assert(v1037, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:88:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v1038 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:6:54:decimal', stdlib.UInt_max, '4'), v1016);
            const v1039 = stdlib.safeAdd(v1032, v1038);
            const v1040 = stdlib.safeMod(v1039, stdlib.checkedBigNumberify('./index.rsh:6:70:decimal', stdlib.UInt_max, '3'));
            const cv968 = v1040;
            const cv969 = v1033;
            const cv976 = v976;
            
            v968 = cv968;
            v969 = cv969;
            v976 = cv976;
            
            continue;}
          
          }
        
        }
      
      }
    const v1095 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v1098 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:95:18:decimal', stdlib.UInt_max, '2'), v947);
    const v1100 = v1095 ? v946 : v963;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v968), {
      at: './index.rsh:99:36:application',
      fs: ['at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v947, v948], secs: v950, time: v949, didSend: v674, from: v946 } = txn1;
  ;
  const v959 = stdlib.safeAdd(v949, v948);
  stdlib.protect(ctc1, await interact.acceptWager(v947), {
    at: './index.rsh:51:37:application',
    fs: ['at ./index.rsh:50:17:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v946, v947, v948, v959],
    evt_cnt: 0,
    funcNum: 1,
    lct: v949,
    onlyIf: true,
    out_tys: [],
    pay: [v947, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v965, time: v964, didSend: v683, from: v963 } = txn2;
      
      const v967 = stdlib.safeAdd(v947, v947);
      sim_r.txns.push({
        amt: v947,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v968 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v969 = v964;
      const v976 = v967;
      
      if (await (async () => {
        const v984 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v984;})()) {
        const v991 = stdlib.safeAdd(v969, v948);
        sim_r.isHalt = false;
        }
      else {
        const v1095 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v1098 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:95:18:decimal', stdlib.UInt_max, '2'), v947);
        const v1100 = v1095 ? v946 : v963;
        sim_r.txns.push({
          kind: 'from',
          to: v1100,
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
    timeoutAt: ['time', v959],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v946, v947, v948, v959],
      evt_cnt: 0,
      funcNum: 2,
      lct: v949,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1113, time: v1112, didSend: v871, from: v1111 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v946,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1113, time: v1112, didSend: v871, from: v1111 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:39:47:application',
      fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:54:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v965, time: v964, didSend: v683, from: v963 } = txn2;
    const v967 = stdlib.safeAdd(v947, v947);
    ;
    let v968 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v969 = v964;
    let v976 = v967;
    
    while (await (async () => {
      const v984 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v984;})()) {
      const v991 = stdlib.safeAdd(v969, v948);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v991],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v946, v947, v948, v963, v976, v991],
          evt_cnt: 0,
          funcNum: 5,
          lct: v969,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1079, time: v1078, didSend: v824, from: v1077 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v963,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1079, time: v1078, didSend: v824, from: v1077 } = txn4;
        ;
        const v1080 = stdlib.addressEq(v946, v1077);
        const v1081 = stdlib.addressEq(v963, v1077);
        const v1082 = v1080 ? true : v1081;
        stdlib.assert(v1082, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:68:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:39:47:application',
          fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:68:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v1000], secs: v1002, time: v1001, didSend: v709, from: v999 } = txn3;
        ;
        const v1003 = stdlib.addressEq(v946, v999);
        stdlib.assert(v1003, {
          at: './index.rsh:67:23:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1010 = stdlib.safeAdd(v1001, v948);
        const v1014 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:74:68:application',
          fs: ['at ./index.rsh:73:25:application call to [unknown function] (defined at: ./index.rsh:73:29:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v946, v947, v948, v963, v976, v1000, v1010, v1014],
          evt_cnt: 1,
          funcNum: 6,
          lct: v1001,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:76:21:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1016], secs: v1018, time: v1017, didSend: v719, from: v1015 } = txn4;
            
            ;
            const v1026 = stdlib.safeAdd(v1017, v948);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v1010],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v946, v947, v948, v963, v976, v1000, v1010],
            evt_cnt: 0,
            funcNum: 7,
            lct: v1001,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1061, time: v1060, didSend: v790, from: v1059 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v946,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1061, time: v1060, didSend: v790, from: v1059 } = txn5;
          ;
          const v1062 = stdlib.addressEq(v946, v1059);
          const v1063 = stdlib.addressEq(v963, v1059);
          const v1064 = v1062 ? true : v1063;
          stdlib.assert(v1064, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:77:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:39:47:application',
            fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:77:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v1016], secs: v1018, time: v1017, didSend: v719, from: v1015 } = txn4;
          ;
          const v1019 = stdlib.addressEq(v963, v1015);
          stdlib.assert(v1019, {
            at: './index.rsh:76:21:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v1026 = stdlib.safeAdd(v1017, v948);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v1026],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v946, v947, v948, v963, v976, v1000, v1016, v1026],
              evt_cnt: 0,
              funcNum: 9,
              lct: v1017,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v1043, time: v1042, didSend: v756, from: v1041 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v963,
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
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v1043, time: v1042, didSend: v756, from: v1041 } = txn6;
            ;
            const v1044 = stdlib.addressEq(v946, v1041);
            const v1045 = stdlib.addressEq(v963, v1041);
            const v1046 = v1044 ? true : v1045;
            stdlib.assert(v1046, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:86:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:39:47:application',
              fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:86:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v1031, v1032], secs: v1034, time: v1033, didSend: v729, from: v1030 } = txn5;
            ;
            const v1035 = stdlib.addressEq(v946, v1030);
            stdlib.assert(v1035, {
              at: './index.rsh:85:23:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v1036 = stdlib.digest(ctc3, [v1031, v1032]);
            const v1037 = stdlib.digestEq(v1000, v1036);
            stdlib.assert(v1037, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:88:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v1038 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:6:54:decimal', stdlib.UInt_max, '4'), v1016);
            const v1039 = stdlib.safeAdd(v1032, v1038);
            const v1040 = stdlib.safeMod(v1039, stdlib.checkedBigNumberify('./index.rsh:6:70:decimal', stdlib.UInt_max, '3'));
            const cv968 = v1040;
            const cv969 = v1033;
            const cv976 = v976;
            
            v968 = cv968;
            v969 = cv969;
            v976 = cv976;
            
            continue;}
          
          }
        
        }
      
      }
    const v1095 = stdlib.eq(v968, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v1098 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:95:18:decimal', stdlib.UInt_max, '2'), v947);
    const v1100 = v1095 ? v946 : v963;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v968), {
      at: './index.rsh:99:36:application',
      fs: ['at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAQAAFQBQkgCAcoAniAAQQDWDAmAwEAAQEAIjUAMRhBBI8qZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQAIsSSEHDEABOEkhBgxAAN5JIQQMQABWIQQSRCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCA6dIIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4hBls1/YAENRoq0DT+FlA0/RZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNP4WNP0WUAESRDT/NAMhBVs0AyEIWzQDVzAgNP0hDDQDIQpbCQghDRgyBjQDJFtCAsVIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC00mBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEENQEyBjUCQgJQSCU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5kkhCQxAANBJIQwMQACISCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDlsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBayEJEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEPSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhD1sMRDT/iAFGNANXACA0/zQDIQhbMQAjMgY0/0kIQgBgSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBls1/oAErNEfwzT/FlA0/hZQsDT/iAD1MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB8Nf81/jX9Nfw1+zX6Nfk0/SMSQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAObEisgEhCTT6C7III7IQNPw0+TT9IQkSTbIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCENMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
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
                "name": "v947",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v948",
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
                "name": "v947",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v948",
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
    "name": "_reach_e2",
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
                "name": "v1000",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1016",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1031",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1032",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
    "name": "_reach_m2",
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
                "name": "v1000",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1016",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1031",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1032",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
  Bytecode: `0x608060405260405162001d1738038062001d178339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b61199a806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461152b565b610197565b6100a16100e836600461152b565b61032e565b3480156100f957600080fd5b506001546100b4565b6100a1610110366004611547565b6104ac565b6100a161012336600461152b565b6106da565b6100a161013636600461152b565b610875565b6100a161014936600461152b565b610b15565b34801561015a57600080fd5b50610163610d58565b6040516100be929190611559565b6100a161017f36600461152b565b610df5565b6100a161019236600461152b565b610f8c565b6101a760016000541460096110e2565b6101c1813515806101ba57506001548235145b600a6110e2565b6000808055600280546101d3906115b6565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115b6565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611607565b905061027781606001514310600b6110e2565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a8929190611680565b60405180910390a16102c18160200151341460086110e2565b6102c96113e4565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152516103179080611108565b6020820151604001526103298161115b565b505050565b61033e600160005414600d6110e2565b6103588135158061035157506001548235145b600e6110e2565b60008080556002805461036a906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610396906115b6565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b50505050508060200190518101906103fb9190611607565b905061040f8160600151431015600f6110e2565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610440929190611680565b60405180910390a16104543415600c6110e2565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b50600080805560018190556104a89060029061143d565b5050565b6104bc60096000541460276110e2565b6104d6813515806104cf57506001548235145b60286110e2565b6000808055600280546104e8906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610514906115b6565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b505050505080602001905181019061057991906116bd565b905061058c8160e00151431060296110e2565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105e7341560246110e2565b80516105ff906001600160a01b0316331460256110e2565b6040805161064b9161062591602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a001511460266110e2565b6106536113e4565b815181516001600160a01b03918216905260208084015183519091015260408084015183518201526060808501518451931692019190915260c08301516106b5916106ae9190860135906106a9906004906112e8565b611108565b6003611337565b602080830180519290925281514391015260808301519051604001526103298161115b565b6106ea60056000541460176110e2565b610704813515806106fd57506001548235145b60186110e2565b600080805560028054610716906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610742906115b6565b801561078f5780601f106107645761010080835404028352916020019161078f565b820191906000526020600020905b81548152906001019060200180831161077257829003601f168201915b50505050508060200190518101906107a79190611769565b90506107bb8160a0015143101560196110e2565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107ec929190611680565b60405180910390a1610800341560156110e2565b8051610834906001600160a01b0316331461082a5760608201516001600160a01b0316331461082d565b60015b60166110e2565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610491573d6000803e3d6000fd5b610885600760005414601c6110e2565b61089f8135158061089857506001548235145b601d6110e2565b6000808055600280546108b1906115b6565b80601f01602080910402602001604051908101604052809291908181526020018280546108dd906115b6565b801561092a5780601f106108ff5761010080835404028352916020019161092a565b820191906000526020600020905b81548152906001019060200180831161090d57829003601f168201915b505050505080602001905181019061094291906117fd565b905061095a6040518060200160405280600081525090565b61096b8260c001514310601e6110e2565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161099c92919061189b565b60405180910390a16109b03415601a6110e2565b60608201516109cb906001600160a01b03163314601b6110e2565b6109d9438360400151611108565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610aea9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b0e92919061147a565b5050505050565b610b2560056000541460126110e2565b610b3f81351580610b3857506001548235145b60136110e2565b600080805560028054610b51906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7d906115b6565b8015610bca5780601f10610b9f57610100808354040283529160200191610bca565b820191906000526020600020905b815481529060010190602001808311610bad57829003601f168201915b5050505050806020019051810190610be29190611769565b9050610bfa6040518060200160405280600081525090565b610c0b8260a00151431060146110e2565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c3c92919061189b565b60405180910390a1610c50341560106110e2565b8151610c68906001600160a01b0316331460116110e2565b610c76438360400151611108565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610aea565b600060606000546002808054610d6d906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d99906115b6565b8015610de65780601f10610dbb57610100808354040283529160200191610de6565b820191906000526020600020905b815481529060010190602001808311610dc957829003601f168201915b50505050509050915091509091565b610e0560076000541460216110e2565b610e1f81351580610e1857506001548235145b60226110e2565b600080805560028054610e31906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5d906115b6565b8015610eaa5780601f10610e7f57610100808354040283529160200191610eaa565b820191906000526020600020905b815481529060010190602001808311610e8d57829003601f168201915b5050505050806020019051810190610ec291906117fd565b9050610ed68160c0015143101560236110e2565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f07929190611680565b60405180910390a1610f1b3415601f6110e2565b8051610f4f906001600160a01b03163314610f455760608201516001600160a01b03163314610f48565b60015b60206110e2565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b610f9c600960005414602c6110e2565b610fb681351580610faf57506001548235145b602d6110e2565b600080805560028054610fc8906115b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff4906115b6565b80156110415780601f1061101657610100808354040283529160200191611041565b820191906000526020600020905b81548152906001019060200180831161102457829003601f168201915b505050505080602001905181019061105991906116bd565b905061106d8160e00151431015602e6110e2565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338360405161109e929190611680565b60405180910390a16110b23415602a6110e2565b8051610834906001600160a01b031633146110dc5760608201516001600160a01b031633146110df565b60015b602b5b816104a85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261111583826118d8565b91508110156111555760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016110ff565b92915050565b6040805160208101909152600081526020820151516001141561128557611192826020015160200151836000015160400151611108565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061127f92919061147a565b50505050565b60208201515160021461129d578151606001516112a1565b8151515b6001600160a01b03166108fc6112c06002856000015160200151611385565b6040518115909202916000818181858888f19350505050158015610491573d6000803e3d6000fd5b6000826112f583826118f0565b91508111156111555760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016110ff565b6000816113745760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016110ff565b61137e828461191d565b9392505050565b60008115806113a95750828261139b8183611931565b92506113a79083611950565b145b6111555760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016110ff565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161143860405180606001604052806000815260200160008152602001600081525090565b905290565b508054611449906115b6565b6000825580601f10611459575050565b601f01602090049060005260206000209081019061147791906114fe565b50565b828054611486906115b6565b90600052602060002090601f0160209004810192826114a857600085556114ee565b82601f106114c157805160ff19168380011785556114ee565b828001600101855582156114ee579182015b828111156114ee5782518255916020019190600101906114d3565b506114fa9291506114fe565b5090565b5b808211156114fa57600081556001016114ff565b60006040828403121561152557600080fd5b50919050565b60006040828403121561153d57600080fd5b61137e8383611513565b60006060828403121561152557600080fd5b82815260006020604081840152835180604085015260005b8181101561158d57858101830151858201606001528201611571565b8181111561159f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806115ca57607f821691505b6020821081141561152557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461160257600080fd5b919050565b60006080828403121561161957600080fd5b6040516080810181811067ffffffffffffffff8211171561164a57634e487b7160e01b600052604160045260246000fd5b604052611656836115eb565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146116ae57600080fd5b80604085015250509392505050565b60006101008083850312156116d157600080fd5b6040519081019067ffffffffffffffff8211818310171561170257634e487b7160e01b600052604160045260246000fd5b8160405261170f846115eb565b81526020840151602082015260408401516040820152611731606085016115eb565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c0828403121561177b57600080fd5b60405160c0810181811067ffffffffffffffff821117156117ac57634e487b7160e01b600052604160045260246000fd5b6040526117b8836115eb565b815260208301516020820152604083015160408201526117da606084016115eb565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561180f57600080fd5b60405160e0810181811067ffffffffffffffff8211171561184057634e487b7160e01b600052604160045260246000fd5b60405261184c836115eb565b8152602083015160208201526040830151604082015261186e606084016115eb565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526060810161137e602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156118eb576118eb6118c2565b500190565b600082821015611902576119026118c2565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261192c5761192c611907565b500690565b600081600019048311821515161561194b5761194b6118c2565b500290565b60008261195f5761195f611907565b50049056fea26469706673582212207924e21b4485445ca443142228035c07d93d9ff2a07e06912b3bd030d4ae307d64736f6c634300080c0033`,
  BytecodeLen: 7447,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:54:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:96:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:60:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:68:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:70:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:79:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
