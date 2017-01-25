/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"

  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false

*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = (str) => {
  const sortStr = newStr => newStr.split('')
    .filter((element, index, arr) => {
      return arr.indexOf(element) == index;
    })
    .sort((a, b) => a - b).join('');
  const abc = 'qazwsxedcrfvtgbyhnujmikolp';
  return sortStr(abc) == sortStr(str);
};


/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [{:a "b"}]]] => [1, 2, {:a "b"}]
 
 */

/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.

Первый макет.
https://github.com/ilyaphilin/referenceBook/blob/dev/index.html


Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html


*/