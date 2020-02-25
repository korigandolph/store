import React from 'react';

const aboutStyle ={
    fontSize: 'larger',
    padding: 30
}

const picStyle={
    height: 'auto'
}

const bioStyle={
    borderRadius: 100,
    height: 400,
    width: 'auto'
}
const About =()=>(
    <div>
        <img className='about-pic' style={picStyle}src='https://i.pinimg.com/originals/e5/cd/e8/e5cde894c8cb88be75a5e7eff9ea7d81.png' alt='plants'/>
        <div className='about-w' style={aboutStyle}>
            <h1>Welcome to BrightBoxes</h1>
            <h3>
                Perfect gifts to make anyone feel special. 
                New boxes each month filled with cute and affordable gifts to brighten anyone's day!
            </h3>
            <hr></hr>
        <p>We wanted to create a simple and affordable way for you to show love to others. Each box is full of treats to make anyone feel special and loved. There are always new boxes to send. Send a gift box to anyone to instantly brighten their day.</p>
        </div>
        <img className='bioPic' style={bioStyle} src='https://korigandolphhome.files.wordpress.com/2018/12/hqrvsa2cttq5i8svwefkoq.jpg' alt='profile pic'/>
        <p style={aboutStyle}>
            Started by two best friends who wanted to help others on their rough days. We wanted to help brighten someone else's day and didn't know what to send them that didn't cost a fortune. We looked around and grabbed some treats from a few different stores and put them together in a box. Now we want to help other's do the same. We have created boxes that will help you show someone your love for them. With new boxes every month, there are always fun things to send to the special people in your life.
        </p>
    </div>
)
export default About