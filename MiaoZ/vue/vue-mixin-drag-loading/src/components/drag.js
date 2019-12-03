let dragMixin = {
  currentTarget: null,
  methods: {
    move (event) {
      const x = event.clientX
      const y = event.clientY
      this.currentTarget.style.transform = `translate(${x}px, ${y}px)`
    },
    leave () {
      document.removeEventListener('mousemove', this.move)
    },
    start(event) {
      this.currentTarget = event.currentTarget
      console.log(this.currentTarget)
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseleave', this.leave)
    }
  }
}

export default dragMixin