
//  <div class="leftcover">

// </div>
// <div class="rightcover"> <div class="middlecover"><b>`+ '${coverName}' + `</b></div></div>

let templatecode = `

<div class="bookitem">
<div class="trigger">
    <div class="bookside" v-bind:style="frontcoverColorbookside"></div>
    <div class>
        <div class="cover" v-bind:style="coverEvent" @click="clicktargetBook('book')" >


            <div class="plane front" >  <div class="frontmask"></div>
                <div class="titleimage" v-bind:style="frontcoverColor"></div>
                <div class="booktitleonfront">
                <b>`+ '${coverName}' + `</b>
                </div> 
                <div class="booktitleonfront" style="transform:translateY(-78px);color: goldenrod;">
                `+ '${coverName}' + `
                </div>
              
            </div>
            <div class="plane back">back</div>

        </div>

        <div class="page page1 paper" v-bind:style="page1">page1</div>
        <div class="page page1 paper" v-bind:style="page2">page2</div>
        <div class="page page1 paper" v-bind:style="page3">page3</div>
        <div class="page page1 paper" v-bind:style="page4" @click="clicktargetBook('book')">

        </div>

        <div class="bookmark" @click="$emit('click-comic',  bookKeyToken)">前往閱讀</div>
        <div class="coverimage" v-bind:style="coverImagePic" @click="$emit('click-char',  bookKeyToken)">
            <span class="coverimagetext">人物一覽</span>
        </div>
        <div class="booktitle" @click="$emit('click-story',  bookKeyToken)">
            <b>`+ '${coverName}' + `</b>
        </div>
        <div class="plane bookback">


        </div>



    </div>
</div>
<div class="bookbackpage"></div>

<div class="bookborder2"></div>
<div class="bookborder"></div>
</div>
`;
Vue.component('single-book', {
    template: templatecode
    ,
    props: ['backgroundImage', 'coverNameOrign', 'storyIntroduction', 'bookKey'],
    delimiters: ['${', '}'],
    data: function () {
        return {
            avitve: false,
            coverEvent: { transform: '' },
            bookKeyToken: this.bookKey,
            storyintroductiontext: this.storyIntroduction,
            frontcoverColor: {
                'background-image': `url(${this.backgroundImage})`

            },
            frontcoverColorbookside: {
                'background-color': 'black',
                'border-right': 'solid 1px #205060',
                'z-index': '-9'
            },
            coverImagePic: { 'background-image': `url(${this.backgroundImage})` },
            coverName: this.coverNameOrign,
            page1: { transform: '', 'z-index': 2 },
            page2: { transform: '', 'z-index': 2, },
            page3: { transform: '', 'z-index': 2, },
            page4: { transform: '', 'z-index': 2, },
            openBookActive: false,
            timeTip: 250,
            clickAble: true,
        }
    },
    methods: {
        linktarget: function () {
            alert('the target');
        },
        clicktargetBook: function (targetname) {
            console.log(this.data)

            if (this.avitve == true) return;
            if (this.clickAble == true) {
                this.clickAble = false;
                if (this.openBookActive == false) {
                    this.avitve = true;
                    this.openBook();
                }
                else {
                    this.avitve = true;
                    this.closeBook();
                }
                this.openBookActive = !this.openBookActive;

            }
        },
        closeBook: function () {
            let vm = this;
            vm.pageEventFunction(4, 'close');

            setTimeout(function () {
                vm.pageEventFunction(3, 'close');
            }, vm.timeTip * 1);
            setTimeout(function () {
                vm.pageEventFunction(2, 'close');
            }, vm.timeTip * 2);
            setTimeout(function () {
                vm.pageEventFunction(1, 'close');
            }, vm.timeTip * 3);
            setTimeout(function () {
                vm.coverEventFunction();
                vm.clickAble = true;
            }, vm.timeTip * 4);
            setTimeout(function () {
                vm[`page4`]['z-index'] = 2;
            }, vm.timeTip * 5);
            setTimeout(function () {
                vm.avitve = false;
            }, vm.timeTip * 6);



        },
        openBook: function () {
            let vm = this;
            vm.coverEventFunction();
            setTimeout(function () {
                vm.pageEventFunction(1, 'open');
            }, vm.timeTip * 1);
            setTimeout(function () {
                vm.pageEventFunction(2, 'open');
            }, vm.timeTip * 2);
            setTimeout(function () {
                vm.pageEventFunction(3, 'open');
            }, vm.timeTip * 3);
            setTimeout(function () {
                vm.pageEventFunction(4, 'open');
                vm.clickAble = true;
            }, vm.timeTip * 4);

            setTimeout(function () {
                vm.avitve = false;
            }, vm.timeTip * 5);

        },
        coverEventFunction: function () {
            this.coverEvent.transform =
                this.coverEvent.transform == '' ? 'perspective(1000px) rotateY(-180deg)' : '';

            this.page1['z-index'] == 4 ? this.page1['z-index'] = 2 : null;

        },
        pageEventFunction: function (pagenumber, bookactive) {
            this[`page${pagenumber}`].transform =
                this[`page${pagenumber}`].transform == '' ? 'perspective(1000px) rotateY(-180deg)' : '';

            this[`page${pagenumber}`]['z-index'] == 2 ? this[`page${pagenumber}`]['z-index'] = pagenumber + 3 :
                null;
            if (pagenumber < 4 && bookactive == 'close') {
                this[`page${pagenumber + 1}`]['z-index'] = 2;

                // console.log(`===================${pagenumber}=====================`)
                // for (let i = pagenumber + 1; i <= 4; i++) {

                //     this[`page${i}`]['z-index'] = this[`page${i}`]['z-index'] - 2;
                //     if (this[`page${i}`]['z-index'] < 1) this[`page${i}`]['z-index'] = 1;
                //     console.log(i, this[`page${i}`]['z-index'])
                // }
            }

        }

    }

});