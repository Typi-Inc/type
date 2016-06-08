export let directs=[
{
	toWhom:{name:'Abai',image:'data:image/jpeg;base64,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',
	karma:343},lastTime:'12:45',counter:12,
	lastText:'What is going on in your life, havent checked you up for so long' 

},
{
	toWhom:{name:'Issildur',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtoCVUpVbxMyTwuExep1uQP83F9IhpAMF9Opez7WXICXZMi12Ag',
	karma:212},lastTime:'12:08',counter:3,
	lastText:'nuh'
},
{
	toWhom:{name:'Aragorn',image:'data:image/jpeg;base64,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',
	karma:565},lastTime:'11:23',counter:4,
	lastText:'of course'
},
{
	toWhom:{name:'Harry potter',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5h3hrn42hHywQj5WAzAbfH_n2ZMav-QnvrVdr-3WjgEKd1dkL',
	karma:787},lastTime:'10:34',counter:0,
	lastText:'let s go to the mall my mom is cooking food'
},
{
	toWhom:{name:'Josh',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnuRSeeyPve7KwDvJJ6OBzj3gyghwLcE2z9kZeYBOyZavh3mw',
	karma:234},lastTime:'10:20',counter:0,
	lastText:'common dont be sill you will get cold there'
},
{
	toWhom:{name:'Brent',image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQc364GqLLnhfFllhF91hAGVCyJ-MO3JZuA6DN3uZtbQi4KWCgv',
	karma:123},lastTime:'09:45',counter:0,
	lastText:'hi'
},
{
	toWhom:{name:'Barak Obama',
	image:'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2016/05/09/876/493/694940094001_4885965796001_9cc88214-5962-41e4-a293-56e1f55dcc00.jpg?ve=1&tl=1',
	karma:123},lastTime:'09:20',counter:0,
	lastText:'yo'
},
{
	toWhom:{name:'Awesome Group',
	image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTia5fkqWS9LJZGhdV43-iPg0Rok-CJyJCNvCm0LfGF6Guan5Eg',
	karma:123},lastTime:'09:20',counter:0,
	lastText:'was up'
},
{
	toWhom:{name:'Almas',
	image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9XT4F1-aQurMC6zL7bzHjYeJDoiPU3a75J_FcddgbHxU33CVI8A',
	karma:123},lastTime:'09:20',counter:0,
	lastText:'common'
},



]
export let messages=[{
	text:'let s sing a funny little song and have a greate weekend '
},
{text:'sup'},
{
	text:'good'
},
{
	text:'are you down for movies'
},
{
	text:`Its big,
It’s warm,                                                    
It’s fuzzy.
Before you get ideas – it’s a big g’night HUG from me to you!`
},
{
	text:`When the night breeze blows my hair, I imagine they’re your kisses
I can stand missing you this much.`
},
{
	text:`God sprinkles tiny but wonderful seeds of blessings on earth each day...and I just caught one that's so nice and true...it's YOU ! Love you and good night`
},
{
	text:`I love all the stars in the sky, but they are nothing compared to the ones in your eyes! So I’ll think about you as I turn in for the night. Good Night!`
},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
// {
// 	text:`One day I wish my dream would come true
// And I’d wake up next to you. Till then Good Night!`
// },
// {
// 	text:`Hey there
// just dropped by to say hello.
// Hope that you had a wonderful day! Good Night.`
// },
// {
// 	text:`The sun rose and set today - like every other day
// But no one knows my world has stopped.
// It will move only when we meet again tomorrow. Good night my love!`
// },
// {
// 	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
// },
// {
// 	text:`Nobody's right till somebody’s wrong.
// Nobody's weak till somebody’s strong.
// Nobody's lucky till love comes along.
// Nobody's lonely till somebody’s gone.
// I love and miss you tonight!`
// },
{text:'short'}
]
export let newMessages=[
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
	{text:'hello there friends'},
	{text:'how is it going bro'},

	{text:'we are so good here'},
	{text:'sup'},
	{text:'chilling'},
	{
	text:`One day I wish my dream would come true
And I’d wake up next to you. Till then Good Night!`
},
{
	text:`Hey there
just dropped by to say hello.
Hope that you had a wonderful day! Good Night.`
},
{
	text:`The sun rose and set today - like every other day
But no one knows my world has stopped.
It will move only when we meet again tomorrow. Good night my love!`
},
{
	text:`I wish I was there to hold you tight, instead of just sending you this loving “Good Night.”`
},
{
	text:`Nobody's right till somebody’s wrong.
Nobody's weak till somebody’s strong.
Nobody's lucky till love comes along.
Nobody's lonely till somebody’s gone.
I love and miss you tonight!`
},
]


