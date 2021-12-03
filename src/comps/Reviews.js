import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';




function Review(props)
{
    var items = [
        {
            title: "Chris Humer | Fire Chief Tolono FPD",
            p1: `We had John Koller come and speak to our fire department in June. I have know John for over 8 years. John’s is very passionate about the fire service, leadership and most importantly people which comes out in his presentation. He spoke of leadership, commitment, service to the community.  His years of experience, and education allow him to share his valuable experience.`, 
            p2: `The part that resonated most was when he said we make decisions that will benefit the community, not what is most beneficial for the individual or what is easiest for everyone. We provide the level of service that we would want for our family if it was their emergency. This got people thinking which was great. So when you don’t want to train, you think of this and you show up to make yourself the firefighter you would want showing up.`,
            p3: `We plan to have John come back again and speak more on leadership, both for members and fire officers. If you want to hear the truth about what leadership should be and the work that is involved, John is your guy.` ,
            p4: `Thanks John for all you do and leaving our fire service better than you found it.`
        },
        {
            title: "Adam Kimball",
            p1: "If I were to describe John in one word it would be passion.  Passion to get the best out of everyone he encounters. John knows that tomorrow is not guaranteed and gives his all everyday, laying it on the line for his family, his community and his Team.",
            p2: "Many years as a firefighter and Chief, father and coach has positioned John as a high level leader.  John teaches the fundamentals to being successful in life measured by relationships and achieved with grit.  If I am hand selecting a team to go to battle with John is not only on the team but he is leading it.",
            p3: "Some run out of a burning building or away from tough situations, John runs into the building, faces things head on and will be the last one out.  Through many years of training and intense life experiences, John has dealt with life and death situations with care, compassion and leadership.  Knowing how short our time on earth is John is motivated to inspire others today.",
        },
        {
            title: "Dave Parsons",
            p1: "When I was given the opportunity to write this testimonial, I was stumped, not because I didn’t have anything positive to say, just the opposite, I could fill a book with positive things to say.  A lot of people can teach leadership.  What makes John special is he invests in the person. ",
            p2: "What John taught me went further than leading my team, he made me a stronger person and simply put a better person.  John helped me through personal issues I didn’t even know I had.  I recently witnessed John do the same for a mutual friend. ",
            p3: "If you want random training go online there is plenty.  If you want someone to give you the human touch, have John Koller teach you!",
        },
        {
            title: "Jim Barden",
            p1: "Recently, John has provided support and guidance to me throughout some particularly difficult work related situations.  He has given me clarity and practical advice as to how to tackle the issues in a way that left me feeling empowered and confident.",
            p2: "I am forever thankful for his honest and straightforward approach and would recommend him to anyone who is struggling professionally or personally. " ,
        },

    ]

    return (
        <Carousel 
        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: 'red' // 2
            },
        }} autoPlay = {false}>
            {
                items.map( (item, i) => <Reviews key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Reviews(props)
{
    return (
    

        <Paper elevation="0">
            <h2>{props.item.title}</h2>
            {/* <p>{props.item.description}</p> */}
            <p>{props.item.p1}</p>
            <p>{props.item.p2}</p>
            <p>{props.item.p3}</p>
            <p>{props.item.p4}</p>
        </Paper>

    )
}

export default Review;