import { TweenLite, TweenMax, TimelineMax, Power3 } from 'gsap';

export default class BookDetailTransition {

    setItemSize(item,width,height) {
        return new Promise((successCallback) => {
            TweenLite.set(item, {
                width:width,
                height: height,
                //opacity:0,
                onComplete: ()=>{successCallback(true)},
            });
        });
    }

    setItemTransform(item,translateY, translateX) {
        return new Promise((successCallback) => {
            TweenLite.set(item, {
                y: -translateY+"px",
                x: -translateX+"px",
                //opacity:0,
                onComplete: ()=>{successCallback(true)},
            });
        });
    }

    transitionIn(item) {
        return new Promise((successCallback) => {
            TweenLite.fromTo(item, 0.3,
                {
                    autoAlpha:1,
                },
                {
                    width: 30+"vw",
                    height: 70+"vh",
                    y: 0,
                    x: 0,
                    ease: Power3.easeInOut,
                    onComplete: () => {
                        successCallback(true);
                    },
                });
        });
    }

    async animationEnter(item, event, items) {
        return new Promise((resolve, reject) => {
            (async () => {
                await this.setItemSize(item,  event.currentTarget.getBoundingClientRect().width, (event.currentTarget.getBoundingClientRect().width*1.2) );
                await this.setItemTransform(item, (item.getBoundingClientRect().top - event.currentTarget.getBoundingClientRect().top ) , (item.getBoundingClientRect().x - event.currentTarget.getBoundingClientRect().x ) );
                await this.transitionIn(item);
                await this.hideItems(items);
                resolve();
            })()
        });
    }

    hideItems(items) {
        return new Promise((successCallback) => {
            const timeline = new TimelineMax({
                paused: true,
                onComplete: () => {
                    successCallback(true);
                },
            });
            const waitTime = 0;
            items.forEach((item,index)=>{
                timeline.add(TweenMax.to(item, 0.2,
                    { autoAlpha: 0, y: 30, ease: Power3.easeInOut }), index * 0.1 + waitTime);
            });
            timeline.play();
        });
    }
}