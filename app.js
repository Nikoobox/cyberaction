// game video hide when modal closed
$(function(){
    $('#modalVideo1').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });

    $('#modalVideo2').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });

    $('#modalVideo3').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });

    $('#modalVideo4').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });
});
// Radom comments appear on screen
const comments = [
    {
        name: "@_il_2_",
        message: "Это реально магия 😮",
        date:""
    },
    {
        name: "@alexsukholobov",
        message: "Было очень круто!💪🏻",
        date:""
    },
    {
        name: "@valentina_tark",
        message:"Так смешно со стороны смотрится 😁, но игра крутая 👏",
        date:""
    },
    {
        name: "@v_effulgent",
        message:"$упер кла$$!!!!😍🤙🏿🤪",
        date:""
    },
    {
        name: "@viki60s",
        message:"Наконец-то в Самаре 😍",
        date:""
    },
    {
        name: "@targari_en",
        message:"Технологии уже здесь!))",
        date:""
    },
    {
        name: "@apr_163",
        message:"Победа за нами🙌",
        date:""
    }
];
// const num =comments.length;
// function getRandomInt(num) {
//     const randomNum = Math.floor(Math.random() * Math.floor(num))
//     return randomNum;
//   }
// const commentsSec = document.querySelector('#commentsSec');
// const makeComment = document.createElement('div');
// makeComment.innerHTML=`<b>${comments[getRandomInt(num)].name}</b> : ${comments[getRandomInt(num)].message}`;
// commentsSec.appendChild(makeComment);

// function getRandomInt(){
//     const randomNum = Math.floor(Math.random() * Math.floor(num))
//     return randomNum;
//   };
// const random=getRandomInt(num);

//------------ ORIGINAL WORKING CODE-------------------------

// const num =comments.length;
// function getRandomInt(num){

//     const randomNum = Math.floor(Math.random() * num);
//     return randomNum;
//   };
// const random=getRandomInt(num);
// const commentsSec = document.querySelector('#commentsSec');
// const makeComment = document.createElement('div');

// makeComment.innerHTML=`<b>${comments[random].name}</b> : ${comments[random].message}`;
// makeComment.classList.add('social');
// commentsSec.appendChild(makeComment);

//---------------------------------------------------------
const num =comments.length;
function getRandomInt(num){
    const randomNum = Math.floor(Math.random() * num);
    return randomNum;
  };

setInterval(() => {
    const random=getRandomInt(num);
    const name = comments[random].name;
    const message = comments[random].message;

    makeComment.innerHTML=`<b>${name}</b> : ${message}`;
}, 6000);
const random=getRandomInt(num);

const commentsSec = document.querySelector('#commentsSec');
// makeComment.innerHTML=`<b>${comments.name}</b> : ${comments.message}`;
const makeComment = document.createElement('div');
makeComment.innerHTML=`<b>${comments[1].name}</b> : ${comments[1].message}`;

makeComment.classList.add('social');
commentsSec.appendChild(makeComment);