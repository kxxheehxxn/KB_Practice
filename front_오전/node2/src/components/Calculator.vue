<template>
  <div id="calculator">

    <div id="display">{{current || '0'}}</div>
    <div @click = "clear" class="btn clear">C</div>
    <div @click = "reverse" class="btn reverse">+/−</div>
    <div @click = "percent" class="btn percent">%</div>
    <div @click = "divide" class="btn divide operator">÷</div>
    <div @click = "append('7')" class="btn seven">7</div>
    <div @click = "append('8')" class="btn eight">8</div>
    <div @click = "append('9')" class="btn nine">9</div>
    <div @click = "multiply" class="btn multiply operator">×</div>
    <div @click = "append('4')" class="btn four">4</div>
    <div @click = "append('5')" class="btn five">5</div>
    <div @click = "append('6')" class="btn six">6</div>
    <div @click = "minus" class="btn minus operator">−</div>
    <div @click = "append('1')" class="btn one">1</div>
    <div @click = "append('2')" class="btn two">2</div>
    <div @click = "append('3')" class="btn three">3</div>
    <div @click = "plus" class="btn plus operator">+</div>
    <div @click = "append('0')" class="btn zero">0</div>
    <div @click = "dot" class="btn dot">.</div>
    <div @click = "answer" class="btn answer operator">=</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      previous : null,
      current : '0',
      operator : null,
      operatorClicked: false,
    }
  },
  methods: {
    clear(){
      this.current = '0';
    },
    reverse(){
      if(this.current.charAt(0) == '-'){
        this.current = this.current.slice(1);
      }
      else{
        this.current = `-${this.current}`;
      }

    },
    percent(){
      this.current = `${parseFloat(this.current) / 100}`;
    },
    setPrevioius(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (a, b) => a / b;
      this.setPrevioius();
    },
    multiply(){
      this.operator = (a, b) => a * b;
      this.setPrevioius();
    },
    minus(){
      this.operator = (a, b) => a - b;
      this.setPrevioius();
    },
    plus(){
      this.operator = (a, b) => a + b;
      this.setPrevioius();
    },
    dot(){
      if(this.current.indexOf('.') == -1) {
        this.append('.');
      }
    },
    answer(){
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
    append(number){

      if(this.current == 'NaN'){
        this.current = 0;
      }

      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false; 
      }

      if(this.current != 0){
        this.current = `${this.current}${number}`;
      }
      else{
        this.current = `${number}`;
      }
    },

  },
}
</script>

<style scoped>

*{
  margin: 0px;
  padding: 0px;
}

#calculator {
  width: 300px;
  height: 475px;
  margin-left:auto;
  margin-right:auto;
  margin-top:50px;
  border-right: 1px solid black;
}

#display{
  width:100%;
  height:100px;

  background-color: black;
  color:white;
  text-align:right;
  font-size:60px;
  font-weight:100;
  line-height:150px;
}

.btn{
  width:75px;
  height:75px;
  float:left;
  color:black;
  font-size:24px;
  text-align:center;
  line-height:75px;
  border-left:1px solid black;
  border-bottom:1px solid black;

  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;

  background-color:#ececec;
}

.btn:active {
  opacity: 0.4;
}

.operator{
  background-color:#F47F27;
  color:white;
  font-size:35px;
  font-weight:200;
}

.zero{
  width:150px;
}
</style>
