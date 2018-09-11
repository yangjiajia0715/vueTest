<template>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    // this.arrayInclude()
    this.arrayFilter()
    this.arraySome()
    this.arrayReduce()
  },
  methods: {
    arrayInclude: function () {
      console.log(this)
      const characters = [
        'ironman',
        'black_widow',
        'hulk',
        'captain_america',
        'hulk',
        'thor'
      ]
      console.log('characters', characters)
      // 2
      console.log(characters.indexOf('hulk'))
      // -1
      console.log(characters.indexOf('batman'))
      // true
      console.log(characters.includes('hulk'))
      // false
      console.log(characters.includes('batman'))
    },
    getCharacter: function (name) {
      return character => character.name === name
      // return character => ({character: name})
      // return (character, index) => {
      //   if (index > 3) {
      //     return character.name === name
      //   } else {
      //     return character.name === name
      //   }
      // }
      // return function (character) {
      //   return character.name === name
      // }
    },
    arrayFilter: function () {
      const characters = [
        { id: 1, name: 'ironman' },
        { id: 2, name: 'black_widow' },
        { id: 3, name: 'captain_america' },
        { id: 4, name: 'captain_america' }
      ]
      // [{id: 3, name: "captain_america"}, 0: {id: 3, name: "captain_america"}]
      console.log(characters.filter(this.getCharacter('captain_america')))
      // {id: 3, name: "captain_america"}
      console.log(characters.find(this.getCharacter('captain_america')))
      characters.filter(function (item, index, array) {
        console.log('item', item, 'index', index, 'array', array)
      })
    },
    arraySome: function () {
    },
    arrayReduce: function () {
    }
  }
}
</script>

<style scoped>

</style>
