export let directs=[
{
	toWhom:{name:'Abai',image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUTEhMWFhUWFRgYGBUXFxgXGBobFxgaGBkYGBcYHSggGBolGxsXITEiJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQBBwj/xAA9EAABAwIEBAMGBQMDAwUAAAABAAIRAyEEEjFBBQZRYSJxkRMygaHB8AcUQrHRI+HxYnKSg5OiFSQzUlP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+GoiICIiAiIgIiICIiAiL0hB4i9IXuU6oMUWxotbpefovG0zaxv6m8W+fogwRZALFAREQEREBERAREQEREBERAREQEREBERAREQFll326/fkVkwRqIDtyNp1HoVN4HgrXBueo1k3Lbl5AmHNEZYII1Ij4hBGYPBPrPyggQJLnGzWiBJ3AFltZgXQTlvmaNJsZItuLfd1c+G8GpgEMLgcjpzTpZ2mjvEGxa9jsFsZhm0A6XP8NmO0zOEOOZrXTYW0GvcoKng+DZ8wzNa0B2d7jplaXHwgZpMGIBn1j3hvDBUiZMwAIk7giNot6KS4nxqmARSc8vfOfMOoLfEJyWEQ0N3MnRc9GoAc1UwG3AJJJsPCPMgG+iDgfhwHENBgPIn9IZZuYgDeJmY9Vsq4KxFMlxa51wMoIENt2mN/guzEYhhg7EicoDRYnUD/AKZMT12UUK+WSbanXUkaiBHX18kGqtw5zPe6HS+kyPOy43NUxQ4hvF53EjuNYIMbjc+a5MRD5I1n1Am/YmxQcK9e2DF/iI7roe6J0M22iBHbXyjfqsK7W/pFtv7lBoREQEREBERAREQEREBERAREQEREBZNE2WKl+C8KNVzS6zCTrvGsb+gQTHLvCm1n5WsEezmbPknRxa45SbHw7R2X0rBcLw9GiHNZmqSTLmgkk65WCLkzc6Sbrj5SaHMy0qVNobILyRDjO4EzefCDA85XdxjHPph0OptkBvgdly6TJGgHrZBXcZxGq0lzhlzG0jUm94Em0EAaGJNxNZ4njnvY1lOb9C8kk3JBFgBbve+0zXEMSyYdRFgQXAubmza+J0iYIkAbwei46nEqVPwhsAk75rxvA0+/IKWKTmukRYi4Nvv+CpDEvFVrXEkQIMDcbD1HwWPE8Ux1mAC9y0OE73zOO4XOx+gEi1hE2kn46a+aCcweEDqRc3XV1RwgBosAZ13MW17KDx1IAgNvt3A7jbVT+DxNM4d7XuMtMtYBAPUuJvOgsoSpiHF0WDQZgffQIOIWgkWWZqDt3n9u68dSJExPx+ACyGHEd+hQa29V454cBaCOmmmkLc2nsSI/b0+7LngBBpK8W1/dawLoPEREBERAREQEREBERAREQEREG7DNbILyQ3WwknsJt6q0cGrMcf8A86cCYDS920ZoBEiYa0CSZMb1RjCbC52G/WwVz5UpDL4y1oBLnGW3tMkmwgX9NDqFoxVYljaTXBgyEeEx4iNsoGYxDQBaS4qOqcNp0vE6sQc2YumC6/uyTb0jrsoPjPE2lzqgLjFmXNiNCT5DaP3VexXEajzme4nU3jfWLfPsgmsVxhxDwSR4oYZJ8MkkEzeJgKFrVBJLnOcTM+IesR9VzPqExeYCwuSg8+QK7KVMgA5iLkRtbZa6eFL9lJUeDvgTMaoOrB4drmlxMRY7T3He11GvYDJHxjoDt8h6q3cJ4IN5069dfksOL8r1XnNSZqBpew2BQU8uO3pv/dZAhp8RLiNYNp89z5LdxDhdWiZcx/mQYXCBM/fxQdDcNmkg+Vtl5+WA1vfZaaeIc2W/59V2UnZhJ+PofuUHC9oBgLQV2Yho2XG5B4QvF6506/cLxAREQEREBERAREQEREBZNHy+7LFejug3YYuvlkAiHR0Oot1Vo4dhXGkRZuYtF/CQAZywLx1AGwuq1hK8Atyggkakj9iJHYqZdii1hJcAfda39z3vN73KDrxlMOqtpU6bXU6cjdoc67SS4Xn4zBXdW4XRaJdTuJ8Ie4C2kZoHexNgqkyrlJ3PXp5Hp9yt9TEvqCHuce0keo0KDHiBaT4Rbzn5/wCV5hMMN17lW/C6oLBwrDi0gK2UsKMosFXeFt0lWfBoJHh+GFgGhTmHoQLfMSo/h0AKUo1EGurwtr/ea0/D6Kh81cmNYTUpNgbgbenf5L6bTdAXLi2hwjYoPz9iKFMEF2kw7q0zv1afquTG0PZmAZBkg9R0/b1Vy5w5edhq3tvZ56DrPAmwPWNI28gq5jOFmGhjszCJYZ2O09JQRLX30+q567YNlm4Fpg69NCvKswJQaQF4iICIiAiIgIiICIiAiIgL0LxEG3DnxCfv7+q34irJuRpaBp2jrpdc1Mbz9/wpfh/DPamS9rYvlADnejoB9Sgji02IBjWYsu4n3Yt2G23qdVlxEZHBrQ5oABLS5wAsLlpNjtqdF5gGZygzczdbMA4TCnTwJ2TOfcmJWOB4Y0OBJA87IJXhmHJEwrLgsOei28MwIDRp5qbwtFo6IOPDCF2Uq14WVXDxfqlChIlB2+1stLnLqoubFyB8Qs62TYhBFYoBwhwBB1B0XzHm3gYw5DqMgEk20G/35L6djWRpoqzzZSzYZ7j+m/mg+QYvFZqmZwvoYt2kLDEvBFu8/fZYcRjOS3Q3+zuucFBiiyy7rFAREQEREBERAREQEREBEXoHdB1cLY01WB92l7c14OWfELXuJCnuYeYWV2tbToUqYabNY2BAEDYXjfXVVqm/KQRqCCPgujCszPgDyH3sg62vbVw9TMMr6ZzAgGHtc5rSx3cEggnuveDMcavsqRFQmIIzBvc3bPbRa69HK141BPlBB26jaNLDoFLfhuYxzWlsl9OoGi2uUuFz/tQdfMeNr02to1KjAW2DKbSRcXLi51yNNOqhqWCr1PG6q1v+5wCsfEuX6j3vqEEvk2d18xqufgvK/tR/V96dTf4RsghKeLq0TbEtPkcwU9w/njEUh42ioBuCQfQzK3cR5V9hRIJbUhrmtJsRmOYm2um/UqrUmZGmUF5P4psIE0X+oWVLnXF4ph/LUQxosXuMgHpYXsQobkblxmIYTU1M5SI8J6mdfJWn8N8CAzF4SoP6lCuSRtleIEdRLSfiEFG4pnJ/rYuHdADafjK6OE4YyPZ8SAJ/SC5s+p+isOI4Cx1R9M5ZLpkiNiCCD5yu/C8iNFEiq8VAKZYyYlgc7MSIAkzETpdBjhcViaXhq135TpUlj237EAqD5n5nqU2OoOdTqte1zczW5HN292SPmtP/AKLiKc0Q4vpk+HqP7KE5k4I+k+my7n1ASBvA3/f0KCKwtBzo8DnA6GO8WPmD8V0YlsCXTa1wTP35qw8i0XtLjlJpkeKIIkaTfXaN5Wj8QGtYabR7z5qEdGzlZceTz8Qgq+JrB2gsOq0IiAiIgIiICIiAiIgIiICIiD2VLuw2XCtr7udk/wCJcT8svoodXjkfhjMdh6uFNUUnNqB4c73crgGkHyIkdygqzXFzbnWwHeY+sq2v4LUwzMNjqcGCDGkEaA9nCR5+acxcuUsPVLcM9zqIeGgvc0vLwPGfAAMvuxbqF9FZh2uwbabx4fZtB84/eyCqjmxjwXVaNZh3OQvZ3h7V14fm/AwM1SCP9Lwf2lRfBKtWi59NrzkJ/wAHsYU/hsE2JcBPVBB8a5nwj2kMzPPZrz8zZfPcfiS9xgECd9V9C5kxdNgIt5Kh1yXPkwAg+k/huzJQE+a6eK0q+Exn57DUxVbUZkrUs2W7YyunawAnaD1XVyVhv6LY3AUzUY5pjUTdBB4rmmk+DXwOIY7/AOzWNqt/5NdJ9FyVebMMBDG1W+dKp+0FTuLyCxbC38M4ZTebAIK7huOGp/8ADg8RVdt4PZs+L36ei8pcIre0fi8W1rarwGMptOYUqY1E6FxMyfPrA+h0cA1gsIUBzEbR3QfO/wAN8K787UDXe65zXtOjm3gjyIPqq7z9WLsbUGzG02N7BtNv1lXz8PcD/XxWIBIHtHNFtTGY691835rxAqYyu4ae0I/4+H6IIlERAREQEREBERAREQEREBERAXRg67mGQexExI1XOiC0YDiAc9rr2c2xP3J/lfU8figzDHyt9/FfDcDVyvB6aTp9yr3xLi+fBtAcbiPS30QbOC4wPeepKsGOxeVsAwSN1864BistWSbQT6LypxZ9TMSdSTHToPgAg3cdIknNJO6galVxK6q4LyfveFngMI4kAAT590Fj5L4tiA32TQSJ1MwOg9VZ8PW4gKrR7SgWF3iFxDesk3KqtWliKJBZSqBts2UZtN7dlsrVak6mQSADIPkg+nYzCNqsgOvGqiuC451Kr7OpYj0MdFVMNxqoymG1HRkEXN5I7d1obzF/UOYzBkR92i/wQfYfz4I1Va5grWnYLPAYnPTa8aOaD/Kj+aauShUcRo0np80EBwnj9PA4B7iR7Ss576bZkkuFrfpaPp3Xy5xm51XrnE6mYEDy6LFAREQEREBERAREQEREBERAREQERexbX4IPWmF34XFkNyEyBJHxsVwtqEaW/f1W6jRdUJyjxBpdA3y3Pyk/BB0sqQ6VO0OG03UgB7xEkjuJv0VYDpCmuXsXDoJ1tfSCg5anCDMNJ+KleH8GiM8/B30KmKvD4hw06rtbTGX4IMuHYCkPdquifEC5nyiFYmcBpPbIM+WQfPVV7h1JrnGQDof8q7cGotaLADyQU7E/h2HzNV7WzJvmJ0sZsN/VVvE8sexxTKbXOcHTOb3h3kaWM/BfYa9YTr/dUrC1v/fVGub1LbbHKNfOUFmw+HDKdOm3RrQPQfuqZ+JePy4fIP1uDfgP7BWfFY1tNpmBHfaNT2/hfHOauMfmaxcPcbZv1KCGREQEREBERAREQEREBERAREQEREBERAVg5HZONpjqKk/9t2qgQVdfwvotNSu8+82mA09MxufkPVBB8z8P9jWJb7rrx0J1Hko/C4gNeHdFaObQHPO6qVSmgvnDeMNLMjr216dgs2V/aOgaKh4bFuYQRspLA8Xyuv6oPpPCmRAj5T11KtTBDbL5twvmNu7o+5VgbzNTGjrxrc3/AMIJ+tVDW53RINun3/K+d0uPNbjK1QmxZAJO4728l5zbzeHRTpEEauibWIy/t6KD4By6/EODnyGanqe3YIOnmHj1atTdltSzZS8AjOeg7BVNfQefMMKWGYxoAaHAADyK+fICIiAiIgIiICIiAiIgIiICIiAiIgIiICuX4cOh2IP+hv7lU1WXkXFBtV7D+tlvNpmPSfRB18cu8+artamrPxYCfv8AhQOJagjjTWPsT0XSzVT/AAnhudBXKeGqHQFSmC4FXqG8i2ui+icJ4EwAEj6qY/LtB8IFkFI4Pyk0EEiTOp+iu3DeHCmLDZdmFwo6fwuuqyEHzn8TD/Rb/v8AoV82V8/FHFAup0x3cf2H1VDQEREBERAREQEREBERAREQEREBERAREQFsw9YscHNMFpkLWiCxDHe18XXboueuomjVLTIUg3EB/n0QcztVaeSuINzlj7bgqt1WLTTYZBBg9UH2j860ARv039NV0YYTr6D+VR+W6jgLknurvgSgl6RgafuuPjXEWUabqj3Q1oufoOp/lRvHeaKGFbD3gv2ptu4/DQDuYXyfmXmSrjHeLw02nw0wbDuT+p3dBx8a4i7EVn1XfqNh0aNB6LhREBERAREQEREBERAREQEREBERAREQEREBERAREQbW4hw39V0UsfGrZ+K4kQWDD8zuZ7tNs9zP0WOL5uxTxlFTIOjBl/8ALX5qBRB650mTcndeIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z',
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
// s
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



export let firstLetters=[
	"A",'B','C','D','E','F',
	'G','H','I','J','K','L',
	'M','N','O','P','Q','R',
	'S','T','U','V','W',
	'Y','Z'
]
export let countries=[
{
"name": "Afghanistan",
"dial_code": "+93",
"code": "AF"
},
// {
// "name": "Aland Islands",
// "dial_code": "+358",
// "code": "AX"
// },
// {
// "name": "Albania",
// "dial_code": "+355",
// "code": "AL"
// },
// {
// "name": "Algeria",
// "dial_code": "+213",
// "code": "DZ"
// },
// {
// "name": "AmericanSamoa",
// "dial_code": "+1 684",
// "code": "AS"
// },
{
"name": "Andorra",
"dial_code": "+376",
"code": "AD"
},
// {
// "name": "Angola",
// "dial_code": "+244",
// "code": "AO"
// },
// {
// "name": "Anguilla",
// "dial_code": "+1 264",
// "code": "AI"
// },
// {
// "name": "Antarctica",
// "dial_code": "+672",
// "code": "AQ"
// },
// {
// "name": "Antigua and Barbuda",
// "dial_code": "+1268",
// "code": "AG"
// },
{
"name": "Argentina",
"dial_code": "+54",
"code": "AR"
},
{
"name": "Armenia",
"dial_code": "+374",
"code": "AM"
},
// {
// "name": "Aruba",
// "dial_code": "+297",
// "code": "AW"
// },
{
"name": "Australia",
"dial_code": "+61",
"code": "AU"
},
{
"name": "Austria",
"dial_code": "+43",
"code": "AT"
},
{
"name": "Azerbaijan",
"dial_code": "+994",
"code": "AZ"
},
// {
// "name": "Bahamas",
// "dial_code": "+1 242",
// "code": "BS"
// },
// {
// "name": "Bahrain",
// "dial_code": "+973",
// "code": "BH"
// },
// {
// "name": "Bangladesh",
// "dial_code": "+880",
// "code": "BD"
// },
{
"name": "Barbados",
"dial_code": "+1 246",
"code": "BB"
},
{
"name": "Belarus",
"dial_code": "+375",
"code": "BY"
},
{
"name": "Belgium",
"dial_code": "+32",
"code": "BE"
},
{
"name": "Belize",
"dial_code": "+501",
"code": "BZ"
},
{
"name": "Benin",
"dial_code": "+229",
"code": "BJ"
},
{
"name": "Bermuda",
"dial_code": "+1 441",
"code": "BM"
},
{
"name": "Bhutan",
"dial_code": "+975",
"code": "BT"
},
{
"name": "Bolivia",
"dial_code": "+591",
"code": "BO"
},
// {
// "name": "Bosnia and Herzegovina",
// "dial_code": "+387",
// "code": "BA"
// },
// {
// "name": "Botswana",
// "dial_code": "+267",
// "code": "BW"
// },
{
"name": "Brazil",
"dial_code": "+55",
"code": "BR"
},
// {
// "name": "British Indian Ocean Territory",
// "dial_code": "+246",
// "code": "IO"
// },
// {
// "name": "Brunei Darussalam",
// "dial_code": "+673",
// "code": "BN"
// },
{
"name": "Bulgaria",
"dial_code": "+359",
"code": "BG"
},
{
"name": "Burkina Faso",
"dial_code": "+226",
"code": "BF"
},
{
"name": "Burundi",
"dial_code": "+257",
"code": "BI"
},
{
"name": "Cambodia",
"dial_code": "+855",
"code": "KH"
},
{
"name": "Cameroon",
"dial_code": "+237",
"code": "CM"
},
{
"name": "Canada",
"dial_code": "+1",
"code": "CA"
},
{
"name": "Cape Verde",
"dial_code": "+238",
"code": "CV"
},
{
"name": "Cayman Islands",
"dial_code": "+ 345",
"code": "KY"
},
{
"name": "Central African Republic",
"dial_code": "+236",
"code": "CF"
},
{
"name": "Chad",
"dial_code": "+235",
"code": "TD"
},
{
"name": "Chile",
"dial_code": "+56",
"code": "CL"
},
{
"name": "China",
"dial_code": "+86",
"code": "CN"
},
// {
// "name": "Christmas Island",
// "dial_code": "+61",
// "code": "CX"
// },
// {
// "name": "Cocos (Keeling) Islands",
// "dial_code": "+61",
// "code": "CC"
// },
{
"name": "Colombia",
"dial_code": "+57",
"code": "CO"
},
{
"name": "Comoros",
"dial_code": "+269",
"code": "KM"
},
{
"name": "Congo",
"dial_code": "+242",
"code": "CG"
},
// {
// "name": "Congo, The Democratic Republic of the Congo",
// "dial_code": "+243",
// "code": "CD"
// },
// {
// "name": "Cook Islands",
// "dial_code": "+682",
// "code": "CK"
// },
{
"name": "Costa Rica",
"dial_code": "+506",
"code": "CR"
},
{
"name": "Cote d'Ivoire",
"dial_code": "+225",
"code": "CI"
},
{
"name": "Croatia",
"dial_code": "+385",
"code": "HR"
},
{
"name": "Cuba",
"dial_code": "+53",
"code": "CU"
},
{
"name": "Cyprus",
"dial_code": "+357",
"code": "CY"
},
{
"name": "Czech Republic",
"dial_code": "+420",
"code": "CZ"
},
{
"name": "Denmark",
"dial_code": "+45",
"code": "DK"
},
{
"name": "Djibouti",
"dial_code": "+253",
"code": "DJ"
},
{
"name": "Dominica",
"dial_code": "+1 767",
"code": "DM"
},
{
"name": "Dominican Republic",
"dial_code": "+1 849",
"code": "DO"
},
{
"name": "Ecuador",
"dial_code": "+593",
"code": "EC"
},
{
"name": "Egypt",
"dial_code": "+20",
"code": "EG"
},
{
"name": "El Salvador",
"dial_code": "+503",
"code": "SV"
},
{
"name": "Equatorial Guinea",
"dial_code": "+240",
"code": "GQ"
},
{
"name": "Eritrea",
"dial_code": "+291",
"code": "ER"
},
{
"name": "Estonia",
"dial_code": "+372",
"code": "EE"
},
{
"name": "Ethiopia",
"dial_code": "+251",
"code": "ET"
},
{
"name": "Falkland Islands",
"dial_code": "+500",
"code": "FK"
},
{
"name": "Faroe Islands",
"dial_code": "+298",
"code": "FO"
},
{
"name": "Fiji",
"dial_code": "+679",
"code": "FJ"
},
{
"name": "Finland",
"dial_code": "+358",
"code": "FI"
},
{
"name": "France",
"dial_code": "+33",
"code": "FR"
},
{
"name": "French Guiana",
"dial_code": "+594",
"code": "GF"
},
{
"name": "French Polynesia",
"dial_code": "+689",
"code": "PF"
},
{
"name": "Gabon",
"dial_code": "+241",
"code": "GA"
},
{
"name": "Gambia",
"dial_code": "+220",
"code": "GM"
},
{
"name": "Georgia",
"dial_code": "+995",
"code": "GE"
},
{
"name": "Germany",
"dial_code": "+49",
"code": "DE"
},
{
"name": "Ghana",
"dial_code": "+233",
"code": "GH"
},
{
"name": "Gibraltar",
"dial_code": "+350",
"code": "GI"
},
{
"name": "Greece",
"dial_code": "+30",
"code": "GR"
},
{
"name": "Greenland",
"dial_code": "+299",
"code": "GL"
},
{
"name": "Grenada",
"dial_code": "+1 473",
"code": "GD"
},
{
"name": "Guadeloupe",
"dial_code": "+590",
"code": "GP"
},
{
"name": "Guam",
"dial_code": "+1 671",
"code": "GU"
},
{
"name": "Guatemala",
"dial_code": "+502",
"code": "GT"
},
{
"name": "Guernsey",
"dial_code": "+44",
"code": "GG"
},
{
"name": "Guinea",
"dial_code": "+224",
"code": "GN"
},
{
"name": "Guinea-Bissau",
"dial_code": "+245",
"code": "GW"
},
{
"name": "Guyana",
"dial_code": "+595",
"code": "GY"
},
{
"name": "Haiti",
"dial_code": "+509",
"code": "HT"
},
// {
// "name": "Holy See (Vatican City State)",
// "dial_code": "+379",
// "code": "VA"
// },
{
"name": "Honduras",
"dial_code": "+504",
"code": "HN"
},
{
"name": "Hong Kong",
"dial_code": "+852",
"code": "HK"
},
{
"name": "Hungary",
"dial_code": "+36",
"code": "HU"
},
{
"name": "Iceland",
"dial_code": "+354",
"code": "IS"
},
{
"name": "India",
"dial_code": "+91",
"code": "IN"
},
{
"name": "Indonesia",
"dial_code": "+62",
"code": "ID"
},
{
"name": "Iran",
"dial_code": "+98",
"code": "IR"
},
{
"name": "Iraq",
"dial_code": "+964",
"code": "IQ"
},
{
"name": "Ireland",
"dial_code": "+353",
"code": "IE"
},
{
"name": "Isle of Man",
"dial_code": "+44",
"code": "IM"
},
{
"name": "Israel",
"dial_code": "+972",
"code": "IL"
},
{
"name": "Italy",
"dial_code": "+39",
"code": "IT"
},
{
"name": "Jamaica",
"dial_code": "+1 876",
"code": "JM"
},
{
"name": "Japan",
"dial_code": "+81",
"code": "JP"
},
{
"name": "Jersey",
"dial_code": "+44",
"code": "JE"
},
{
"name": "Jordan",
"dial_code": "+962",
"code": "JO"
},
{
"name": "Kazakhstan",
"dial_code": "+7",
"code": "KZ"
},
{
"name": "Kenya",
"dial_code": "+254",
"code": "KE"
},
{
"name": "Kiribati",
"dial_code": "+686",
"code": "KI"
},
{
"name": "North Korea",
"dial_code": "+850",
"code": "KP"
},
{
"name": "South Korea",
"dial_code": "+82",
"code": "KR"
},
{
"name": "Kuwait",
"dial_code": "+965",
"code": "KW"
},
{
"name": "Kyrgyzstan",
"dial_code": "+996",
"code": "KG"
},
{
"name": "Laos",
"dial_code": "+856",
"code": "LA"
},
{
"name": "Latvia",
"dial_code": "+371",
"code": "LV"
},
{
"name": "Lebanon",
"dial_code": "+961",
"code": "LB"
},
{
"name": "Lesotho",
"dial_code": "+266",
"code": "LS"
},
{
"name": "Liberia",
"dial_code": "+231",
"code": "LR"
},
// {
// "name": "Libyan Arab Jamahiriya",
// "dial_code": "+218",
// "code": "LY"
// },
{
"name": "Liechtenstein",
"dial_code": "+423",
"code": "LI"
},
{
"name": "Lithuania",
"dial_code": "+370",
"code": "LT"
},
{
"name": "Luxembourg",
"dial_code": "+352",
"code": "LU"
},
{
"name": "Macao",
"dial_code": "+853",
"code": "MO"
},
{
"name": "Macedonia",
"dial_code": "+389",
"code": "MK"
},
{
"name": "Madagascar",
"dial_code": "+261",
"code": "MG"
},
{
"name": "Malawi",
"dial_code": "+265",
"code": "MW"
},
{
"name": "Malaysia",
"dial_code": "+60",
"code": "MY"
},
{
"name": "Maldives",
"dial_code": "+960",
"code": "MV"
},
{
"name": "Mali",
"dial_code": "+223",
"code": "ML"
},
{
"name": "Malta",
"dial_code": "+356",
"code": "MT"
},
// {
// "name": "Marshall Islands",
// "dial_code": "+692",
// "code": "MH"
// },
{
"name": "Martinique",
"dial_code": "+596",
"code": "MQ"
},
{
"name": "Mauritania",
"dial_code": "+222",
"code": "MR"
},
{
"name": "Mauritius",
"dial_code": "+230",
"code": "MU"
},
{
"name": "Mayotte",
"dial_code": "+262",
"code": "YT"
},
{
"name": "Mexico",
"dial_code": "+52",
"code": "MX"
},
// {
// "name": "Micronesia, Federated States of Micronesia",
// "dial_code": "+691",
// "code": "FM"
// },
{
"name": "Moldova",
"dial_code": "+373",
"code": "MD"
},
{
"name": "Monaco",
"dial_code": "+377",
"code": "MC"
},
{
"name": "Mongolia",
"dial_code": "+976",
"code": "MN"
},
{
"name": "Montenegro",
"dial_code": "+382",
"code": "ME"
},
// {
// "name": "Montserrat",
// "dial_code": "+1664",
// "code": "MS"
// },
// {
// "name": "Morocco",
// "dial_code": "+212",
// "code": "MA"
// },
// {
// "name": "Mozambique",
// "dial_code": "+258",
// "code": "MZ"
// },
{
"name": "Myanmar",
"dial_code": "+95",
"code": "MM"
},
// {
// "name": "Namibia",
// "dial_code": "+264",
// "code": "NA"
// },
// {
// "name": "Nauru",
// "dial_code": "+674",
// "code": "NR"
// },
{
"name": "Nepal",
"dial_code": "+977",
"code": "NP"
},
{
"name": "Netherlands",
"dial_code": "+31",
"code": "NL"
},
// {
// "name": "Netherlands Antilles",
// "dial_code": "+599",
// "code": "AN"
// },
// {
// "name": "New Caledonia",
// "dial_code": "+687",
// "code": "NC"
// },
{
"name": "New Zealand",
"dial_code": "+64",
"code": "NZ"
},
{
"name": "Nicaragua",
"dial_code": "+505",
"code": "NI"
},
{
"name": "Niger",
"dial_code": "+227",
"code": "NE"
},
{
"name": "Nigeria",
"dial_code": "+234",
"code": "NG"
},
{
"name": "Niue",
"dial_code": "+683",
"code": "NU"
},
{
"name": "Norfolk Island",
"dial_code": "+672",
"code": "NF"
},
// {
// "name": "Northern Mariana Islands",
// "dial_code": "+1 670",
// "code": "MP"
// },
{
"name": "Norway",
"dial_code": "+47",
"code": "NO"
},
{
"name": "Oman",
"dial_code": "+968",
"code": "OM"
},
{
"name": "Pakistan",
"dial_code": "+92",
"code": "PK"
},
{
"name": "Palau",
"dial_code": "+680",
"code": "PW"
},
// {
// "name": "Palestinian Territory, Occupied",
// "dial_code": "+970",
// "code": "PS"
// },
{
"name": "Panama",
"dial_code": "+507",
"code": "PA"
},
// {
// "name": "Papua New Guinea",
// "dial_code": "+675",
// "code": "PG"
// },
{
"name": "Paraguay",
"dial_code": "+595",
"code": "PY"
},
{
"name": "Peru",
"dial_code": "+51",
"code": "PE"
},
{
"name": "Philippines",
"dial_code": "+63",
"code": "PH"
},
{
"name": "Pitcairn",
"dial_code": "+872",
"code": "PN"
},
{
"name": "Poland",
"dial_code": "+48",
"code": "PL"
},
{
"name": "Portugal",
"dial_code": "+351",
"code": "PT"
},
{
"name": "Puerto Rico",
"dial_code": "+1 939",
"code": "PR"
},
{
"name": "Qatar",
"dial_code": "+974",
"code": "QA"
},
{
"name": "Romania",
"dial_code": "+40",
"code": "RO"
},
{
"name": "Russia",
"dial_code": "+7",
"code": "RU"
},
{
"name": "Rwanda",
"dial_code": "+250",
"code": "RW"
},
{
"name": "Reunion",
"dial_code": "+262",
"code": "RE"
},
// {
// "name": "Saint Barthelemy",
// "dial_code": "+590",
// "code": "BL"
// },
// {
// "name": "Saint Helena, Ascension and Tristan Da Cunha",
// "dial_code": "+290",
// "code": "SH"
// },
// {
// "name": "Saint Kitts and Nevis",
// "dial_code": "+1 869",
// "code": "KN"
// },
{
"name": "Saint Lucia",
"dial_code": "+1 758",
"code": "LC"
},
{
"name": "Saint Martin",
"dial_code": "+590",
"code": "MF"
},
// {
// "name": "Saint Pierre and Miquelon",
// "dial_code": "+508",
// "code": "PM"
// },
// {
// "name": "Saint Vincent and the Grenadines",
// "dial_code": "+1 784",
// "code": "VC"
// },
{
"name": "Samoa",
"dial_code": "+685",
"code": "WS"
},
{
"name": "San Marino",
"dial_code": "+378",
"code": "SM"
},
// {
// "name": "Sao Tome and Principe",
// "dial_code": "+239",
// "code": "ST"
// },
{
"name": "Saudi Arabia",
"dial_code": "+966",
"code": "SA"
},
{
"name": "Senegal",
"dial_code": "+221",
"code": "SN"
},
{
"name": "Serbia",
"dial_code": "+381",
"code": "RS"
},
{
"name": "Seychelles",
"dial_code": "+248",
"code": "SC"
},
{
"name": "Sierra Leone",
"dial_code": "+232",
"code": "SL"
},
{
"name": "Singapore",
"dial_code": "+65",
"code": "SG"
},
{
"name": "Slovakia",
"dial_code": "+421",
"code": "SK"
},
{
"name": "Slovenia",
"dial_code": "+386",
"code": "SI"
},
{
"name": "Solomon Islands",
"dial_code": "+677",
"code": "SB"
},
{
"name": "Somalia",
"dial_code": "+252",
"code": "SO"
},
{
"name": "South Africa",
"dial_code": "+27",
"code": "ZA"
},
// {
// "name": "South Georgia and the South Sandwich Islands",
// "dial_code": "+500",
// "code": "GS"
// },
{
"name": "Spain",
"dial_code": "+34",
"code": "ES"
},
{
"name": "Sri Lanka",
"dial_code": "+94",
"code": "LK"
},
{
"name": "Sudan",
"dial_code": "+249",
"code": "SD"
},
{
"name": "Suriname",
"dial_code": "+597",
"code": "SR"
},
// {
// "name": "Svalbard and Jan Mayen",
// "dial_code": "+47",
// "code": "SJ"
// },
{
"name": "Swaziland",
"dial_code": "+268",
"code": "SZ"
},
{
"name": "Sweden",
"dial_code": "+46",
"code": "SE"
},
{
"name": "Switzerland",
"dial_code": "+41",
"code": "CH"
},
{
"name": "Syrian Arab Republic",
"dial_code": "+963",
"code": "SY"
},
{
"name": "Taiwan",
"dial_code": "+886",
"code": "TW"
},
{
"name": "Tajikistan",
"dial_code": "+992",
"code": "TJ"
},
// {
// "name": "Tanzania, United Republic of Tanzania",
// "dial_code": "+255",
// "code": "TZ"
// },
{
"name": "Thailand",
"dial_code": "+66",
"code": "TH"
},
{
"name": "Timor-Leste",
"dial_code": "+670",
"code": "TL"
},
{
"name": "Togo",
"dial_code": "+228",
"code": "TG"
},
{
"name": "Tokelau",
"dial_code": "+690",
"code": "TK"
},
{
"name": "Tonga",
"dial_code": "+676",
"code": "TO"
},
{
"name": "Trinidad and Tobago",
"dial_code": "+1 868",
"code": "TT"
},
{
"name": "Tunisia",
"dial_code": "+216",
"code": "TN"
},
{
"name": "Turkey",
"dial_code": "+90",
"code": "TR"
},
{
"name": "Turkmenistan",
"dial_code": "+993",
"code": "TM"
},
// {
// "name": "Turks and Caicos Islands",
// "dial_code": "+1 649",
// "code": "TC"
// },
{
"name": "Tuvalu",
"dial_code": "+688",
"code": "TV"
},
{
"name": "Uganda",
"dial_code": "+256",
"code": "UG"
},
{
"name": "Ukraine",
"dial_code": "+380",
"code": "UA"
},
{
"name": "United Arab Emirates",
"dial_code": "+971",
"code": "AE"
},
{
"name": "United Kingdom",
"dial_code": "+44",
"code": "GB"
},
{
"name": "United States",
"dial_code": "+1",
"code": "US"
},
{
"name": "Uruguay",
"dial_code": "+598",
"code": "UY"
},
{
"name": "Uzbekistan",
"dial_code": "+998",
"code": "UZ"
},
{
"name": "Vanuatu",
"dial_code": "+678",
"code": "VU"
},
// {
// "name": "Venezuela, Bolivarian Republic of Venezuela",
// "dial_code": "+58",
// "code": "VE"
// },
{
"name": "Vietnam",
"dial_code": "+84",
"code": "VN"
},
{
"name": "Virgin Islands, British",
"dial_code": "+1 284",
"code": "VG"
},
{
"name": "Virgin Islands, U.S.",
"dial_code": "+1 340",
"code": "VI"
},
{
"name": "Wallis and Futuna",
"dial_code": "+681",
"code": "WF"
},
{
"name": "Yemen",
"dial_code": "+967",
"code": "YE"
},
{
"name": "Zambia",
"dial_code": "+260",
"code": "ZM"
},
{
"name": "Zimbabwe",
"dial_code": "+263",
"code": "ZW"
}
]
export let dataBlob={ '0': 'A',
  '1': 'B',
  '2': 'C',
  '3': 'D',
  '4': 'E',
  '5': 'F',
  '6': 'G',
  '7': 'H',
  '8': 'I',
  '9': 'J',
  '10': 'K',
  '11': 'L',
  '12': 'M',
  '13': 'N',
  '14': 'O',
  '15': 'P',
  '16': 'Q',
  '17': 'R',
  '18': 'S',
  '19': 'T',
  '20': 'U',
  '21': 'V',
  '22': 'W',
  '23': 'Y',
  '24': 'Z',
  '0:Afghanistan': { name: 'Afghanistan', dial_code: '+93', code: 'AF' },
  '0:Andorra': { name: 'Andorra', dial_code: '+376', code: 'AD' },
  '0:Argentina': { name: 'Argentina', dial_code: '+54', code: 'AR' },
  '0:Armenia': { name: 'Armenia', dial_code: '+374', code: 'AM' },
  '0:Australia': { name: 'Australia', dial_code: '+61', code: 'AU' },
  '0:Austria': { name: 'Austria', dial_code: '+43', code: 'AT' },
  '0:Azerbaijan': { name: 'Azerbaijan', dial_code: '+994', code: 'AZ' },
  '1:Barbados': { name: 'Barbados', dial_code: '+1 246', code: 'BB' },
  '1:Belarus': { name: 'Belarus', dial_code: '+375', code: 'BY' },
  '1:Belgium': { name: 'Belgium', dial_code: '+32', code: 'BE' },
  '1:Belize': { name: 'Belize', dial_code: '+501', code: 'BZ' },
  '1:Benin': { name: 'Benin', dial_code: '+229', code: 'BJ' },
  '1:Bermuda': { name: 'Bermuda', dial_code: '+1 441', code: 'BM' },
  '1:Bhutan': { name: 'Bhutan', dial_code: '+975', code: 'BT' },
  '1:Bolivia': { name: 'Bolivia', dial_code: '+591', code: 'BO' },
  '1:Brazil': { name: 'Brazil', dial_code: '+55', code: 'BR' },
  '1:Bulgaria': { name: 'Bulgaria', dial_code: '+359', code: 'BG' },
  '1:Burkina Faso': { name: 'Burkina Faso', dial_code: '+226', code: 'BF' },
  '1:Burundi': { name: 'Burundi', dial_code: '+257', code: 'BI' },
  '2:Cambodia': { name: 'Cambodia', dial_code: '+855', code: 'KH' },
  '2:Cameroon': { name: 'Cameroon', dial_code: '+237', code: 'CM' },
  '2:Canada': { name: 'Canada', dial_code: '+1', code: 'CA' },
  '2:Cape Verde': { name: 'Cape Verde', dial_code: '+238', code: 'CV' },
  '2:Cayman Islands': { name: 'Cayman Islands', dial_code: '+ 345', code: 'KY' },
  '2:Central African Republic': 
   { name: 'Central African Republic',
     dial_code: '+236',
     code: 'CF' },
  '2:Chad': { name: 'Chad', dial_code: '+235', code: 'TD' },
  '2:Chile': { name: 'Chile', dial_code: '+56', code: 'CL' },
  '2:China': { name: 'China', dial_code: '+86', code: 'CN' },
  '2:Colombia': { name: 'Colombia', dial_code: '+57', code: 'CO' },
  '2:Comoros': { name: 'Comoros', dial_code: '+269', code: 'KM' },
  '2:Congo': { name: 'Congo', dial_code: '+242', code: 'CG' },
  '2:Costa Rica': { name: 'Costa Rica', dial_code: '+506', code: 'CR' },
  '2:Cote d\'Ivoire': { name: 'Cote d\'Ivoire', dial_code: '+225', code: 'CI' },
  '2:Croatia': { name: 'Croatia', dial_code: '+385', code: 'HR' },
  '2:Cuba': { name: 'Cuba', dial_code: '+53', code: 'CU' },
  '2:Cyprus': { name: 'Cyprus', dial_code: '+357', code: 'CY' },
  '2:Czech Republic': { name: 'Czech Republic', dial_code: '+420', code: 'CZ' },
  '3:Denmark': { name: 'Denmark', dial_code: '+45', code: 'DK' },
  '3:Djibouti': { name: 'Djibouti', dial_code: '+253', code: 'DJ' },
  '3:Dominica': { name: 'Dominica', dial_code: '+1 767', code: 'DM' },
  '3:Dominican Republic': { name: 'Dominican Republic', dial_code: '+1 849', code: 'DO' },
  '4:Ecuador': { name: 'Ecuador', dial_code: '+593', code: 'EC' },
  '4:Egypt': { name: 'Egypt', dial_code: '+20', code: 'EG' },
  '4:El Salvador': { name: 'El Salvador', dial_code: '+503', code: 'SV' },
  '4:Equatorial Guinea': { name: 'Equatorial Guinea', dial_code: '+240', code: 'GQ' },
  '4:Eritrea': { name: 'Eritrea', dial_code: '+291', code: 'ER' },
  '4:Estonia': { name: 'Estonia', dial_code: '+372', code: 'EE' },
  '4:Ethiopia': { name: 'Ethiopia', dial_code: '+251', code: 'ET' },
  '5:Falkland Islands': { name: 'Falkland Islands', dial_code: '+500', code: 'FK' },
  '5:Faroe Islands': { name: 'Faroe Islands', dial_code: '+298', code: 'FO' },
  '5:Fiji': { name: 'Fiji', dial_code: '+679', code: 'FJ' },
  '5:Finland': { name: 'Finland', dial_code: '+358', code: 'FI' },
  '5:France': { name: 'France', dial_code: '+33', code: 'FR' },
  '5:French Guiana': { name: 'French Guiana', dial_code: '+594', code: 'GF' },
  '5:French Polynesia': { name: 'French Polynesia', dial_code: '+689', code: 'PF' },
  '6:Gabon': { name: 'Gabon', dial_code: '+241', code: 'GA' },
  '6:Gambia': { name: 'Gambia', dial_code: '+220', code: 'GM' },
  '6:Georgia': { name: 'Georgia', dial_code: '+995', code: 'GE' },
  '6:Germany': { name: 'Germany', dial_code: '+49', code: 'DE' },
  '6:Ghana': { name: 'Ghana', dial_code: '+233', code: 'GH' },
  '6:Gibraltar': { name: 'Gibraltar', dial_code: '+350', code: 'GI' },
  '6:Greece': { name: 'Greece', dial_code: '+30', code: 'GR' },
  '6:Greenland': { name: 'Greenland', dial_code: '+299', code: 'GL' },
  '6:Grenada': { name: 'Grenada', dial_code: '+1 473', code: 'GD' },
  '6:Guadeloupe': { name: 'Guadeloupe', dial_code: '+590', code: 'GP' },
  '6:Guam': { name: 'Guam', dial_code: '+1 671', code: 'GU' },
  '6:Guatemala': { name: 'Guatemala', dial_code: '+502', code: 'GT' },
  '6:Guernsey': { name: 'Guernsey', dial_code: '+44', code: 'GG' },
  '6:Guinea': { name: 'Guinea', dial_code: '+224', code: 'GN' },
  '6:Guinea-Bissau': { name: 'Guinea-Bissau', dial_code: '+245', code: 'GW' },
  '6:Guyana': { name: 'Guyana', dial_code: '+595', code: 'GY' },
  '7:Haiti': { name: 'Haiti', dial_code: '+509', code: 'HT' },
  '7:Honduras': { name: 'Honduras', dial_code: '+504', code: 'HN' },
  '7:Hong Kong': { name: 'Hong Kong', dial_code: '+852', code: 'HK' },
  '7:Hungary': { name: 'Hungary', dial_code: '+36', code: 'HU' },
  '8:Iceland': { name: 'Iceland', dial_code: '+354', code: 'IS' },
  '8:India': { name: 'India', dial_code: '+91', code: 'IN' },
  '8:Indonesia': { name: 'Indonesia', dial_code: '+62', code: 'ID' },
  '8:Iran': { name: 'Iran', dial_code: '+98', code: 'IR' },
  '8:Iraq': { name: 'Iraq', dial_code: '+964', code: 'IQ' },
  '8:Ireland': { name: 'Ireland', dial_code: '+353', code: 'IE' },
  '8:Isle of Man': { name: 'Isle of Man', dial_code: '+44', code: 'IM' },
  '8:Israel': { name: 'Israel', dial_code: '+972', code: 'IL' },
  '8:Italy': { name: 'Italy', dial_code: '+39', code: 'IT' },
  '9:Jamaica': { name: 'Jamaica', dial_code: '+1 876', code: 'JM' },
  '9:Japan': { name: 'Japan', dial_code: '+81', code: 'JP' },
  '9:Jersey': { name: 'Jersey', dial_code: '+44', code: 'JE' },
  '9:Jordan': { name: 'Jordan', dial_code: '+962', code: 'JO' },
  '10:Kazakhstan': { name: 'Kazakhstan', dial_code: '+7', code: 'KZ' },
  '10:Kenya': { name: 'Kenya', dial_code: '+254', code: 'KE' },
  '10:Kiribati': { name: 'Kiribati', dial_code: '+686', code: 'KI' },
  '13:North Korea': { name: 'North Korea', dial_code: '+850', code: 'KP' },
  '18:South Korea': { name: 'South Korea', dial_code: '+82', code: 'KR' },
  '10:Kuwait': { name: 'Kuwait', dial_code: '+965', code: 'KW' },
  '10:Kyrgyzstan': { name: 'Kyrgyzstan', dial_code: '+996', code: 'KG' },
  '11:Laos': { name: 'Laos', dial_code: '+856', code: 'LA' },
  '11:Latvia': { name: 'Latvia', dial_code: '+371', code: 'LV' },
  '11:Lebanon': { name: 'Lebanon', dial_code: '+961', code: 'LB' },
  '11:Lesotho': { name: 'Lesotho', dial_code: '+266', code: 'LS' },
  '11:Liberia': { name: 'Liberia', dial_code: '+231', code: 'LR' },
  '11:Liechtenstein': { name: 'Liechtenstein', dial_code: '+423', code: 'LI' },
  '11:Lithuania': { name: 'Lithuania', dial_code: '+370', code: 'LT' },
  '11:Luxembourg': { name: 'Luxembourg', dial_code: '+352', code: 'LU' },
  '12:Macao': { name: 'Macao', dial_code: '+853', code: 'MO' },
  '12:Macedonia': { name: 'Macedonia', dial_code: '+389', code: 'MK' },
  '12:Madagascar': { name: 'Madagascar', dial_code: '+261', code: 'MG' },
  '12:Malawi': { name: 'Malawi', dial_code: '+265', code: 'MW' },
  '12:Malaysia': { name: 'Malaysia', dial_code: '+60', code: 'MY' },
  '12:Maldives': { name: 'Maldives', dial_code: '+960', code: 'MV' },
  '12:Mali': { name: 'Mali', dial_code: '+223', code: 'ML' },
  '12:Malta': { name: 'Malta', dial_code: '+356', code: 'MT' },
  '12:Martinique': { name: 'Martinique', dial_code: '+596', code: 'MQ' },
  '12:Mauritania': { name: 'Mauritania', dial_code: '+222', code: 'MR' },
  '12:Mauritius': { name: 'Mauritius', dial_code: '+230', code: 'MU' },
  '12:Mayotte': { name: 'Mayotte', dial_code: '+262', code: 'YT' },
  '12:Mexico': { name: 'Mexico', dial_code: '+52', code: 'MX' },
  '12:Moldova': { name: 'Moldova', dial_code: '+373', code: 'MD' },
  '12:Monaco': { name: 'Monaco', dial_code: '+377', code: 'MC' },
  '12:Mongolia': { name: 'Mongolia', dial_code: '+976', code: 'MN' },
  '12:Montenegro': { name: 'Montenegro', dial_code: '+382', code: 'ME' },
  '12:Myanmar': { name: 'Myanmar', dial_code: '+95', code: 'MM' },
  '13:Nepal': { name: 'Nepal', dial_code: '+977', code: 'NP' },
  '13:Netherlands': { name: 'Netherlands', dial_code: '+31', code: 'NL' },
  '13:New Zealand': { name: 'New Zealand', dial_code: '+64', code: 'NZ' },
  '13:Nicaragua': { name: 'Nicaragua', dial_code: '+505', code: 'NI' },
  '13:Niger': { name: 'Niger', dial_code: '+227', code: 'NE' },
  '13:Nigeria': { name: 'Nigeria', dial_code: '+234', code: 'NG' },
  '13:Niue': { name: 'Niue', dial_code: '+683', code: 'NU' },
  '13:Norfolk Island': { name: 'Norfolk Island', dial_code: '+672', code: 'NF' },
  '13:Norway': { name: 'Norway', dial_code: '+47', code: 'NO' },
  '14:Oman': { name: 'Oman', dial_code: '+968', code: 'OM' },
  '15:Pakistan': { name: 'Pakistan', dial_code: '+92', code: 'PK' },
  '15:Palau': { name: 'Palau', dial_code: '+680', code: 'PW' },
  '15:Panama': { name: 'Panama', dial_code: '+507', code: 'PA' },
  '15:Paraguay': { name: 'Paraguay', dial_code: '+595', code: 'PY' },
  '15:Peru': { name: 'Peru', dial_code: '+51', code: 'PE' },
  '15:Philippines': { name: 'Philippines', dial_code: '+63', code: 'PH' },
  '15:Pitcairn': { name: 'Pitcairn', dial_code: '+872', code: 'PN' },
  '15:Poland': { name: 'Poland', dial_code: '+48', code: 'PL' },
  '15:Portugal': { name: 'Portugal', dial_code: '+351', code: 'PT' },
  '15:Puerto Rico': { name: 'Puerto Rico', dial_code: '+1 939', code: 'PR' },
  '16:Qatar': { name: 'Qatar', dial_code: '+974', code: 'QA' },
  '17:Romania': { name: 'Romania', dial_code: '+40', code: 'RO' },
  '17:Russia': { name: 'Russia', dial_code: '+7', code: 'RU' },
  '17:Rwanda': { name: 'Rwanda', dial_code: '+250', code: 'RW' },
  '17:Reunion': { name: 'Reunion', dial_code: '+262', code: 'RE' },
  '18:Saint Lucia': { name: 'Saint Lucia', dial_code: '+1 758', code: 'LC' },
  '18:Saint Martin': { name: 'Saint Martin', dial_code: '+590', code: 'MF' },
  '18:Samoa': { name: 'Samoa', dial_code: '+685', code: 'WS' },
  '18:San Marino': { name: 'San Marino', dial_code: '+378', code: 'SM' },
  '18:Saudi Arabia': { name: 'Saudi Arabia', dial_code: '+966', code: 'SA' },
  '18:Senegal': { name: 'Senegal', dial_code: '+221', code: 'SN' },
  '18:Serbia': { name: 'Serbia', dial_code: '+381', code: 'RS' },
  '18:Seychelles': { name: 'Seychelles', dial_code: '+248', code: 'SC' },
  '18:Sierra Leone': { name: 'Sierra Leone', dial_code: '+232', code: 'SL' },
  '18:Singapore': { name: 'Singapore', dial_code: '+65', code: 'SG' },
  '18:Slovakia': { name: 'Slovakia', dial_code: '+421', code: 'SK' },
  '18:Slovenia': { name: 'Slovenia', dial_code: '+386', code: 'SI' },
  '18:Solomon Islands': { name: 'Solomon Islands', dial_code: '+677', code: 'SB' },
  '18:Somalia': { name: 'Somalia', dial_code: '+252', code: 'SO' },
  '18:South Africa': { name: 'South Africa', dial_code: '+27', code: 'ZA' },
  '18:Spain': { name: 'Spain', dial_code: '+34', code: 'ES' },
  '18:Sri Lanka': { name: 'Sri Lanka', dial_code: '+94', code: 'LK' },
  '18:Sudan': { name: 'Sudan', dial_code: '+249', code: 'SD' },
  '18:Suriname': { name: 'Suriname', dial_code: '+597', code: 'SR' },
  '18:Swaziland': { name: 'Swaziland', dial_code: '+268', code: 'SZ' },
  '18:Sweden': { name: 'Sweden', dial_code: '+46', code: 'SE' },
  '18:Switzerland': { name: 'Switzerland', dial_code: '+41', code: 'CH' },
  '18:Syrian Arab Republic': { name: 'Syrian Arab Republic', dial_code: '+963', code: 'SY' },
  '19:Taiwan': { name: 'Taiwan', dial_code: '+886', code: 'TW' },
  '19:Tajikistan': { name: 'Tajikistan', dial_code: '+992', code: 'TJ' },
  '19:Thailand': { name: 'Thailand', dial_code: '+66', code: 'TH' },
  '19:Timor-Leste': { name: 'Timor-Leste', dial_code: '+670', code: 'TL' },
  '19:Togo': { name: 'Togo', dial_code: '+228', code: 'TG' },
  '19:Tokelau': { name: 'Tokelau', dial_code: '+690', code: 'TK' },
  '19:Tonga': { name: 'Tonga', dial_code: '+676', code: 'TO' },
  '19:Trinidad and Tobago': { name: 'Trinidad and Tobago', dial_code: '+1 868', code: 'TT' },
  '19:Tunisia': { name: 'Tunisia', dial_code: '+216', code: 'TN' },
  '19:Turkey': { name: 'Turkey', dial_code: '+90', code: 'TR' },
  '19:Turkmenistan': { name: 'Turkmenistan', dial_code: '+993', code: 'TM' },
  '19:Tuvalu': { name: 'Tuvalu', dial_code: '+688', code: 'TV' },
  '20:Uganda': { name: 'Uganda', dial_code: '+256', code: 'UG' },
  '20:Ukraine': { name: 'Ukraine', dial_code: '+380', code: 'UA' },
  '20:United Arab Emirates': { name: 'United Arab Emirates', dial_code: '+971', code: 'AE' },
  '20:United Kingdom': { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
  '20:United States': { name: 'United States', dial_code: '+1', code: 'US' },
  '20:Uruguay': { name: 'Uruguay', dial_code: '+598', code: 'UY' },
  '20:Uzbekistan': { name: 'Uzbekistan', dial_code: '+998', code: 'UZ' },
  '21:Vanuatu': { name: 'Vanuatu', dial_code: '+678', code: 'VU' },
  '21:Vietnam': { name: 'Vietnam', dial_code: '+84', code: 'VN' },
  '21:Virgin Islands, British': 
   { name: 'Virgin Islands, British',
     dial_code: '+1 284',
     code: 'VG' },
  '21:Virgin Islands, U.S.': { name: 'Virgin Islands, U.S.', dial_code: '+1 340', code: 'VI' },
  '22:Wallis and Futuna': { name: 'Wallis and Futuna', dial_code: '+681', code: 'WF' },
  '23:Yemen': { name: 'Yemen', dial_code: '+967', code: 'YE' },
  '24:Zambia': { name: 'Zambia', dial_code: '+260', code: 'ZM' },
  '24:Zimbabwe': { name: 'Zimbabwe', dial_code: '+263', code: 'ZW' } }
  export let rowIDs=[ [ 'Afghanistan',
    'Andorra',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan' ],
  [ 'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Brazil',
    'Bulgaria',
    'Burkina Faso',
    'Burundi' ],
  [ 'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Cote d\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic' ],
  [ 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic' ],
  [ 'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia' ],
  [ 'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia' ],
  [ 'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana' ],
  [ 'Haiti', 'Honduras', 'Hong Kong', 'Hungary' ],
  [ 'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy' ],
  [ 'Jamaica', 'Japan', 'Jersey', 'Jordan' ],
  [ 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan' ],
  [ 'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg' ],
  [ 'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Myanmar' ],
  [ 'North Korea',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Norway' ],
  [ 'Oman' ],
  [ 'Pakistan',
    'Palau',
    'Panama',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico' ],
  [ 'Qatar' ],
  [ 'Romania', 'Russia', 'Rwanda', 'Reunion' ],
  [ 'South Korea',
    'Saint Lucia',
    'Saint Martin',
    'Samoa',
    'San Marino',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic' ],
  [ 'Taiwan',
    'Tajikistan',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu' ],
  [ 'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan' ],
  [ 'Vanuatu',
    'Vietnam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.' ],
  [ 'Wallis and Futuna' ],
  [ 'Yemen' ],
  [ 'Zambia', 'Zimbabwe' ] ]
  export let sectionIDs=[ 0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24 ]




