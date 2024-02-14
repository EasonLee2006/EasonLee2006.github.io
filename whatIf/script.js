document.addEventListener('DOMContentLoaded', function () {
    const sentenceElement = document.getElementById('sentence');
    const b1 = document.getElementById('button1');
    const b2 = document.getElementById('button2');
    const pic = document.getElementById('mainPic');

    const defaultFontSize = 16;
    const defaultPaddingSize = 10;
    let gifUrls = [];
    for(let i=0 ; i<=10 ; i++){
        gifUrls[i] = 'pics/' + i + '.gif'
    }

    // Array of sentences
    const sentences = [
        'Will you be my Valentine?',//0
        'Maybe think twice?',//1
        'Please?',//2
        'I might cry',//3
        'Think one more time?',//4
        'I\'m begging you',//5
        'One last time, please?',//6
        'Ok, but before goodbye, here\'s something',//7
        'Get rickrolled lol',//8
        'Thank you. I love you',//9
        'Here\'s the sorce code, thanks for your participating. Refresh page to play again' //10
    ];

    let phase = 0;
    
    function preloadGifs(urls) {
        urls.forEach(function(url) {
            const img = new Image();
            img.src = url;
            console.log( url + " loaded");
        });
    }
    preloadGifs(gifUrls);

    function the_result(){
        let b1FontSize, b1Padding, b1TextContent, b2FontSize, b2Padding, b2TextContent;
        
        switch (phase) {
            case 0:
                b1FontSize = defaultFontSize;
                b1Padding = defaultPaddingSize;
                b1TextContent = "yes";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "no";
                break;
            case 1:
                b1FontSize = defaultFontSize+4;
                b1Padding = defaultPaddingSize+4;
                b1TextContent = "yes";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "no";
                break;
            
            case 2:
                b1FontSize = defaultFontSize+10;
                b1Padding = defaultPaddingSize+8;
                b1TextContent = "yes";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "no";
                break;
            case 3:
                b1FontSize = defaultFontSize + 16;
                b1Padding = defaultPaddingSize + 12;
                b1TextContent = "ok fine";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "nope";
                break;
            case 4:
                b1FontSize = defaultFontSize+22;
                b1Padding = defaultPaddingSize+16;
                b1TextContent = "sure";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "nope";
                break;
            case 5:
                b1FontSize = defaultFontSize+28;
                b1Padding = defaultPaddingSize+20;
                b1TextContent = "ok";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "nope";
                break;
            case 6:
                b1FontSize = defaultFontSize+34;
                b1Padding = defaultPaddingSize+24;
                b1TextContent = "yes";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "nope";
                break;
            case 7:
                b1FontSize = defaultFontSize;
                b1Padding = defaultPaddingSize;
                b1TextContent = "what?";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "what?";
                break;
            case 8:
                b1FontSize = defaultFontSize;
                b1Padding = defaultPaddingSize;
                b1TextContent = "rick";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "rolled";
                break;
            case 9:
                b1FontSize = defaultFontSize;
                b1Padding = defaultPaddingSize;
                b1TextContent = "love you too";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "i'm just kidding";
                break;
            case 10:
                b1FontSize = defaultFontSize;
                b1Padding = defaultPaddingSize;
                b1TextContent = "sorce";

                b2FontSize = defaultFontSize;
                b2Padding = defaultPaddingSize;
                b2TextContent = "code";
                break;
            default:
                break;
        }

        b1.style.fontSize = b1FontSize + 'px';
        b1.style.padding = b1Padding + 'px';
        b1.textContent = b1TextContent;

        b2.style.fontSize = b2FontSize + 'px';
        b2.style.padding = b2Padding + 'px';
        b2.textContent = b2TextContent;

        pic.src = 'pics/' + phase + '.gif'
        sentenceElement.textContent = sentences[phase];
    }

    b1.addEventListener('click', function () {
        if(phase == 0){
            phase = 9;
        }else if( 1<=phase && phase<=6 ){
            phase = 0;
        }else if( phase == 7){
            phase = 8;
        }else if( phase == 10 ){
            window.open('https://github.com/EasonLee2006/EasonLee2006.github.io/tree/main/whatIf', '_blank');
        }else{
            phase = 10;
        }
        the_result();
    });

    b2.addEventListener('click', function () {
        if(phase <=7){
            phase+=1;
        }else if(phase == 9){
            phase = 1;
        }else if (phase == 10){
            window.open('https://github.com/EasonLee2006/EasonLee2006.github.io/tree/main/whatIf', '_blank');
        }else{
            phase = 10;
        }
        the_result();
    });
});
  