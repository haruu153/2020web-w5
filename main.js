const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏94度だったので、:insertx:は散歩に出かけました。彼らが:inserty:に到達したとき、彼らはしばらくの間恐怖で見つめ、それから:insertz:ボブはおどろきましたが、:insertx:は驚きませんでした。暑い日でした。';
let insertX = ['ウィリー・ザ・ゴブリン','ビッグダディ','サンタクロース'];
let insertY = ['スープキッチン','ディズニーランド','ホワイトハウス'];
let insertZ = ['自然発火しました。','歩道の水たまりに溶けました。','ナメクジになって這いさっていきました。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
