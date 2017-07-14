'use strict';
const should = require('should')
const Compare = require('../src/functions/Compare')

describe('Compare', () => {
    it('测试【对子】是否正常验证', () => {
        const _compare = new Compare([
            { id: '♣Q',  number: '12', flower: '♣', name: 'Q',  status: 'common' },
            { id: '♦A',  number: '1',  flower: '♦', name: 'A',  status: 'self' },
            { id: '♦9',  number: '9',  flower: '♦', name: '9',  status: 'common' },
            { id: '♠10', number: '10', flower: '♠', name: '10', status: 'common' },
            { id: '♥2',  number: '2',  flower: '♥', name: '2',  status: 'common' },
            { id: '♦4',  number: '4',  flower: '♦', name: '4',  status: 'self' },
            { id: '♠4',  number: '4',  flower: '♠', name: '4',  status: 'common' },
        ]);

        let R = _compare.duizi();
        R.Result.should.eql(true);
        R.name.should.eql('4')
    })

     it('测试【两对】是否正常验证', () => {
        const _compare = new Compare([
            { id: '♣Q',  number: '12', flower: '♣', name: 'Q',  status: 'common' },
            { id: '♦A',  number: '1',  flower: '♦', name: 'A',  status: 'self' },
            { id: '♦9',  number: '9',  flower: '♦', name: '9',  status: 'common' },
            { id: '♠9',  number: '9',  flower: '♠', name: '9',  status: 'common' },
            { id: '♥2',  number: '2',  flower: '♥', name: '2',  status: 'common' },
            { id: '♦4',  number: '4',  flower: '♦', name: '4',  status: 'self' },
            { id: '♠4',  number: '4',  flower: '♠', name: '4',  status: 'common' },
        ]);

        let R = _compare.liangdui();
        R.Result.should.eql(true);
        R.Value.length.should.eql(2)
        R.Value[0].should.eql('4')
        R.Value[1].should.eql('9')
    })


    it('测试【三条】是否正常验证', () => {
        const _compare = new Compare([
           {id: '♥6',  number:'6',  flower:'♥', name:'6',  status: 'common'}, 
           {id: '♣Q',  number:'12', flower:'♣', name:'Q',  status: 'common'},
           {id: '♦A',  number:'1',  flower:'♦', name:'A',  status: 'self'},
           {id: '♦9',  number:'9',  flower:'♦', name:'9',  status: 'common'},
           {id: '♦6',  number:'6',  flower:'♦', name:'6',  status: 'self'}, 
           {id: '♠10', number:'10', flower:'♠', name:'10', status: 'common'},
           {id: '♠6',  number:'6',  flower:'♠', name:'6',  status: 'common'}, 
        ]);

        let R = _compare.santiao();
        R.Result.should.eql(true);
        R.name.should.eql('6')
    })

    it('测试【炸弹】是否正常验证', () => {
        const _compare = new Compare([
           {id: '♦9', number:'9', flower:'♦', name:'9', status: 'common'},
           {id: '♠6', number:'6', flower:'♠', name:'6', status: 'common'}, 
           {id: '♠7', number:'7', flower:'♠', name:'7', status: 'common'},
           {id: '♥7', number:'7', flower:'♥', name:'7', status: 'common'}, 
           {id: '♣7', number:'7', flower:'♣', name:'7', status: 'common'},
           {id: '♦4', number:'4', flower:'♦', name:'4', status: 'self'}, 
           {id: '♦7', number:'7', flower:'♦', name:'7', status: 'self'}
        ]);

        let R = _compare.zhadan();
        R.Result.should.eql(true);
        R.name.should.eql('7')
    })

    it('测试【同花】是否正常验证', () => {
        const _compare = new Compare([
           {id: '♦9', number:'9', flower:'♦', name:'9', status: 'common'},
           {id: '♠A', number:'1', flower:'♦', name:'A', status: 'common'}, 
           {id: '♦5', number:'5', flower:'♦', name:'5', status: 'common'},
           {id: '♥4', number:'4', flower:'♥', name:'4', status: 'common'}, 
           {id: '♣7', number:'7', flower:'♣', name:'7', status: 'common'}, 
           {id: '♦4', number:'4', flower:'♦', name:'4', status: 'self'}, 
           {id: '♦7', number:'7', flower:'♦', name:'7', status: 'self'}
        ]);

        let R = _compare.tonghua();
        R.Result.should.eql(true);
        R.Value.should.eql('♦')
    })

    it('测试【顺子】是否正常验证', () => {
        const _compare = new Compare([
           {id: '♣Q',  number:'12',  flower:'♣', name:'Q',  status: 'common'},
           {id: '♦A',  number:'1',   flower:'♦', name:'A',  status: 'self'},
           {id: '♦9',  number:'9',   flower:'♦', name:'9',  status: 'common'},
           {id: '♠10', number:'10',  flower:'♠', name:'10', status: 'common'},
           {id: '♥J',  number:'11',  flower:'♥', name:'J',  status: 'common'}, 
           {id: '♦K',  number:'13',  flower:'♦', name:'K',  status: 'self'}, 
           {id: '♠6',  number:'6',   flower:'♠', name:'6',  status: 'common'}, 
        ]);
        let R = _compare.shunzi();
        R.Result.should.eql(true);
        R.Value.length.should.eql(5)
    })

     it('测试【葫芦】是否正常验证', () => {
        const _compare = new Compare([
           {id: '♣Q',  number:'12',  flower:'♣', name:'Q',  status: 'common'},
           {id: '♦9',  number:'9',   flower:'♦', name:'9',  status: 'common'},
           {id: '♠10', number:'10',  flower:'♠', name:'10', status: 'common'},
           {id: '♥6',  number:'6',   flower:'♥', name:'6',  status: 'common'}, 
           {id: '♠6',  number:'6',   flower:'♠', name:'6',  status: 'common'}, 
           {id: '♦6',  number:'6',   flower:'♦', name:'6',  status: 'self'}, 
           {id: '♦9',  number:'9',   flower:'♦', name:'9',  status: 'self'},
        ]);
        let R = _compare.hulu();
        R.Result.should.eql(true);
        R.Value.double.should.eql('9')
        R.Value.three.should.eql('6')
    })
    

    it('测试【同花顺】是否正常验证', () => {
        const _compare = new Compare([
           {id: '♠Q', number:'12', flower:'♠', name:'Q',  status: 'common'},
           {id: '♠9', number:'9',  flower:'♠', name:'9',  status: 'common'},
           {id: '♠10',number:'10', flower:'♠', name:'10', status: 'common'},
           {id: '♠J', number:'11', flower:'♠', name:'J',  status: 'common'}, 
           {id: '♠6', number:'6',  flower:'♠', name:'6',  status: 'common'}, 
           {id: '♠A', number:'1',  flower:'♠', name:'A',  status: 'self'},
           {id: '♠K', number:'13', flower:'♠', name:'K',  status: 'self'}
        ]);

        let R = _compare.tonghuashun();
        R.Result.should.eql(true);
        R.Flower.should.eql('♠');
    })
})
