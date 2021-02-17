import { SplitText} from "../../../gsap/SplitText";
import { TweenLite, TweenMax, TimelineMax, Power3 } from 'gsap';

export default class BookDetailAnimation {

    animationEnter(container) {
        this.container = container;
        this.cover = this.container?.querySelector('.cover__wrapper');
        this.title = this.container?.querySelector('#title');
        this.titleLight = this.container?.querySelector('#titleLight');
        this.cta = this.container?.querySelector('#cartCta');


        return new Promise((successCallback) => {
            if ( this.cover && this.title && this.titleLight && this.cta ) {
                const waitTime = 1;
                const lettersTitle = this.title.querySelectorAll('.char');
                const lettersTitleLight = this.titleLight.querySelectorAll('.char');

                const timeline = new TimelineMax({
                    paused: true,
                    onComplete: () => {
                        successCallback(true);
                    },
                });

                lettersTitle.forEach((letter,index)=>{
                    timeline.add(TweenMax.to(letter, 0.5,
                        { autoAlpha: 1, y: 0, ease: Power3.easeInOut }), index * 0.01 + waitTime);
                });

                lettersTitleLight.forEach((letter,index)=>{
                    timeline.add(TweenMax.to(letter, 0.5,
                        { autoAlpha: 1, y: 0, ease: Power3.easeInOut }), index * 0.01 + waitTime);
                });
                timeline.add(TweenMax.to(this.cta, 0.8, {y: 0, autoAlpha:1}), "+0");
                timeline.play();

            } else {
                successCallback(true);
            }
        });
    }

    splitText(container) {
        return new Promise((successCallback) => {
            new SplitText(container, {
                type:"chars",
                charsClass: "char",
            });
            successCallback(true);
        });
    }
}