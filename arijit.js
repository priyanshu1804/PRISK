const music=new Audio('audio/7.mp3')

const songs=[
    {
        id:1,
        songName: `Heeriye <br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/1.jpg"
    },
    {
        id:2,
        songName: `Chaleya<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/2.jpg"
    },
    {
        id:3,
        songName: `Bandeya<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/3.jpg"
    },
    {
        id:4,
        songName: `Galti se mistake<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/4.jpg"
    },
    {
        id:5,
        songName: `Bandeya re bandeya<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit pic/5.jpg"
    },
    {
        id:6,
        songName: `Dhaagon se baandhaa <br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/6.jpg"
    },
    {
        id:7,
        songName: `Tera Fitoor<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit pic/7.jpg"
    },
    {
        id:8,
        songName: `Jhoome jo pathaan<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/8.jpg"
    },
    {
        id:9,
        songName: `Tera yaar hoon main<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/9.jpg"
    },
    {
        id:10,
        songName: `Kesariya<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit pic/10.jpg"
    },
    {
        id:11,
        songName: `Desh mere<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit song/11.jpg"
    },
    {
        id:12,
        songName: `Heeriye  <br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/12.jpg"
    },
    {
        id:13,
        songName: `Chaleya<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit pic/13.jpg"
    },
    {
        id:14,
        songName: `Bandeya<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit pic/14.jpg"
    },
    {
        id:15,
        songName: `Galti se mistake<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/15.jpg"
    },
    {
        id:16,
        songName: `Bandeya re bandeya<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/16.jpg"
    },
    {
        id:17,
        songName: `Dhaagon se baandhaa <br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/17.jpg"
    },
    {
        id:18,
        songName: `Tera Fitoor<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/18.jpg"
    },
    {
        id:19,
        songName: `Jhoome jo pathaan<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/19.jpg"
    },
    {
        id:20,
        songName: `Tera yaar hoon main<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/20.jpg"
    },
    {
        id:21,
        songName: `Kesariya<br> 
        <div class="subtitle">Arijit singh</div>`,
        poster:"arijit pic/21.jpg"
    },
]
Array.from(document.getElementsByClassName("songItem")).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let search_results = document.getElementsByClassName("search_results")[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement("a");
    card.classList.add("card");
    card.href = "#" + id;
    card.innerHTML = `
        <img src="${poster}" alt="">
        <div class="content">
            ${songName}
        </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName("a");
    for (let index = 0; index < items.length; index++) {
        let content = items[index].getElementsByClassName("content")[0];
        let text_value = content.textContent || content.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        if (input_value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
});



let masterPlay=document.getElementById("masterPlay");
let wave=document.getElementById("wave");
masterPlay.addEventListener("click",()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill")
    }
})

let pop_song_left=document.getElementById("pop_song_left");
let pop_song_right=document.getElementById("pop_song_right");
let pop_song=document.getElementsByClassName("pop_song")[0];
pop_song_right.addEventListener("click",()=>{
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener("click",()=>{
    pop_song.scrollLeft-=330;
});
let pop_art_left=document.getElementById("pop_art_left");
let pop_art_right=document.getElementById("pop_art_right");
let Artist_bx=document.getElementsByClassName("Artist_bx")[0];
pop_art_right.addEventListener("click",()=>{
    Artist_bx.scrollLeft+=330;
});
pop_art_left.addEventListener("click",()=>{
    Artist_bx.scrollLeft-=330;
});
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('PlayListPlay')).forEach((el)=>{
        el.classList.remove("bi-pause-circle-fill");
        el.classList.add("bi-play-circle-fill")
    })
}
const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.backgroud='rgb(105,105,105,.0)';
    })
}
let index=0;
let poster_master_paly=document.getElementById("poster_master_paly");
let download_music=document.getElementById("download_music");
let title=document.getElementById("title");
Array.from(document.getElementsByClassName("PlayListPlay")).forEach((e)=>{
    e.addEventListener("click",(el)=>{
        index=el.target.id;
        music.src=`arijit song/${index}.mp3`;
        poster_master_paly.src=`arijit pic/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href=`arijit song/${index}.mp3`
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach((elss)=>{
            let {songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute("download",songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroud="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.add("bi-pause-circle-fill");
        el.target.classList.remove("bi-play-circle-fill");
        wave.classList.add("active1");
    });
});
let currentStart=document.getElementById('currentStart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementById('dot');
music.addEventListener("timeupdate",()=>{
    let music_curr=music.currentTime; 
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentend.innerText=`${min1}::${sec1}`;
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100
});
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementById('vol_bar');
let vol_dot=document.getElementById('vol_dot');
vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol._icon.classList.add('bi-volume-off-fill');
    }
    if(vol.val>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});
let back=document.getElementById("back");
let next=document.getElementById("next");
back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`arijit song/${index}.mp3`;
    poster_master_paly.src=`arijit pic/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach((elss)=>{
        let {songName}=elss;
        title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroud="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
});
next.addEventListener("click",()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`arijit song/${index}.mp3`;
    poster_master_paly.src=`arijit pic/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach((elss)=>{
        let {songName}=elss;
        title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroud="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
});

let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener("click", () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add("bi-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML = "repeat";
            break;

        case "repeat":
            shuffle.classList.remove("bi-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            shuffle.classList.add("bi-shuffle");
            shuffle.innerHTML = "random";
            break;

        case "random":
            shuffle.classList.remove("bi-repeat");
            shuffle.classList.add("bi-music-note-beamed");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML = "next";
            break;
    }
});



const next_music=()=>{
    if (index==songs.length) {
        index=1;
    } else {
        index++;
    }
    music.src=`arijit song/${index}.mp3`;
    poster_master_paly.src=`arijit pic/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href=`audio/${index}.mp3`
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach((elss)=>{
        let {songName}=elss;
        title.innerHTML=songName;
        download_music.setAttribute("download",songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroud="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
}


const repeat_music=()=>{
    index;
    music.src=`arijit song/${index}.mp3`;
    poster_master_paly.src=`arijit pic/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href=`audio/${index}.mp3`
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach((elss)=>{
        let {songName}=elss;
        title.innerHTML=songName;
        download_music.setAttribute("download",songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroud="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
}




const random_music=()=>{
    if (index==songs.length) {
        index=1;
    } else {
        index=Math.floor((Math.random()*songs.length)+1);
    }
    music.src=`arijit song/${index}.mp3`;
    poster_master_paly.src=`arijit pic/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href=`arijit song/${index}.mp3`
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach((elss)=>{
        let {songName}=elss;
        title.innerHTML=songName;
        download_music.setAttribute("download",songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroud="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
}



music.addEventListener("ended",()=>{
  let b=shuffle.innerHTML;
   switch (b) {
    case "next":
        next_music();
        break;
    case "random":
        random_music();
        break;
    case "repeat":
        repeat_music();
    break    
         
   }  
});