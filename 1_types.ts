let hello: number = 5;
console.log(hello);

// let boal : boolean = 'true'; // err
let boal : boolean = true; // 0

// function jsadd (num1, num2) {
//    return num1 + num2
// }

function tsadd( num1:number , num2 : number): number {
   return num1 + num2;
}

// void, never, obj, any, unknown
// unknown : 나 정확히 여기 무슨 타입의 데이터가 올지 모르게썽..
// any = 나 여기 어떤 타입이 오던 다 받을거야

// any, unknown를 사용하면 어떤 타입이든 데이터를 모두 받기 떄문에 ts 사용 의미가 없다
// 따라서 ts에서는 타입을 명확하게 할 수 록 좋다
// 그러나 , 다른 사람들이 만든 함수를 사용하는 라이브러리 같은 경우 타입을 유추하는게 쉬운 일 아니다
// 따라서 이 경우에만 타입추론 혹은 any를 사용할 수 있도록 함

let myName : any = 'soonyook' // x
// void 반환 타입이 없다는 것을 의미
function print(name : string) : void{
   console.log(name);
   
}

// never 
// 무한루프 , 에러처리 반환값 없다
const err = (err) : never => {
   throw new Error(err);
   // while(true) {}
}

// obj ( x )
// js 에서는 원시 타입이 아닌 경우 모든 데이터를 오브젝트라고 할 수 있다.
// 따라서 obj로 데이터 타입을 명시해주는 것은 범위가 광범위하기떄문에 사용하지 않는것이 좋다.

let obj: object = {}

type newObjType = {
   name : string

}

let new_obj : newObjType = {name:'soon'}

// promise Type

const tsPromise = (id : number) : Promise<number> => {
   return new Promise((reject) => {
      reject(100);
   });
}

// Default parmeter
function printMsg(message : string = '기본 메세지'): void{
   console.log(message);
}

// Array
const numberArr : Array<number> = [1,2,3];
const stringArr : string[] = ['4','5','6']

// Tuple
// 원소의 갯수가 타입이 정확히 지정된 배열을 사용할 때
const tupleArr : [string, number] = ['1',2]