import Vue from 'vue'
import Users from 'src/components/Users'

describe('Users.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Users)
    })
    expect(vm.$el.querySelector('.list h1').textContent)
      .to.equal('Lista de usuários')
  })
})
