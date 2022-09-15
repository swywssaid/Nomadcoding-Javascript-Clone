const quotes = [
  {
    quote: "one small step",
    author: "ss",
  },
  {
    quote:
      "Everything is happening for me, not to me. And i will make lemonade out of these lemons",
    author: "지나영 선생님",
  },
  {
    quote:
      "다른 사람도 내 식대로 세상을 대한다고 착각하지 말라. 그러면 당신의 인간 관계가 한층 풍요롭게 될 것이다.",
    author: "리처드 칼슨",
  },
  {
    quote:
      "습관은 나무껍질에 새겨놓은 문자 같아서 그 나무가 자라남에 따라 확대된다",
    author: "새뮤얼 스마일스",
  },
  {
    quote: "가장 중요한 것들은 보이지 않는다",
    author: "어린왕자",
  },
  {
    quote: "모든 사람은 자신의 몸이라는 신전을 짓는 건축가이다",
    author: "헨리 데이비드 소로우",
  },
  {
    quote:
      "우리가 이럴까 저럴까 망설이는 것은 선택에 대한 책임을 지고 싶지 않기 때문이다",
    author: "법륜스님",
  },
  {
    quote:
      "stay single and build yourself, God will send someone who actually deserve you.",
    author: "ss",
  },
  {
    quote: "서른도 마흔도 고양이에겐 같은 하루일 뿐이다",
    author: "이번 생은 처음이라",
  },
  {
    quote: "이 가사는 그들 모두에게 나름대로의 의미가 있는 것",
    author: "오아시스 노엘 갤러거(작사가)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomIndex = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex].author);

quote.innerText = quotes[randomIndex].quote;
author.innerText = quotes[randomIndex].author;
