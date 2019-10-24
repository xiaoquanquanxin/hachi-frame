// mutations.spec.js
import {expect} from 'chai'
import data from '../src/store/UserInfoModule.js'
const mutations = data.mutations;

// 解构 `mutations`
const {increment} = mutations;

describe('mutations', () => {
    it('INCREMENT', () => {
        // 模拟状态
        const state = {count: 0}
        // 应用 mutation
        increment(state)
        // 断言结果
        expect(state.count).to.equal(2)
    })
})