import Card from "../componets/Card"
 

export default function Home(){
    return (
        <>  
            <div className="main-card">

                <Card  className ="card"
                img = "Assets/main-article-image.png"
                heading = "Weekly Newsletter: Tweets ofr Higher Engagements"
                content = "In this weekly newsletter, we will be convering ten types of engaging tweets. This is the guide if you're just starting out on Twitter."
                author = {
                    {authorImg:"Assets/User-Avatar.png" ,
                    name : "Jessica Andrews",
                    jobTitle :"Content Manager"}
                }
                />
            </div>
            <div className="card-container">
                <Card className = 'card'
                    img='Assets/article-one-image.png'
                    heading = "7 Tips for Organic Traffic"
                    content = "From sEO to integrating with Paid Advertising, this article covers it all."

                    author = {
                        {authorImg:"Assets/authorOne.png" ,
                        name: "Spencer David",
                        jobTitle:"SEO Specialist"}
                    }
                />
                <Card
                    className = 'card'
                    img='Assets/article-two-image.png'
                    heading = "How To Start Your Own Business"
                    content = "Starting your own business in 2021 has never been easier"

                    author = {
                        {authorImg:"Assets/authorTwo.png" ,
                        name: "Sara Frey",
                        jobTitle:"Business Leader"}
                    }
                />
                <Card className = 'card'
                    img='Assets/article-three-image.png'
                    heading = "5 Tips for Better Branding"
                    content = "From SEO to integrating with Paid Advertising, this article covers it all"

                    author = {
                        {authorImg:"Assets/authorThree.png" ,
                        name: "David Suns",
                        jobTitle:"Brand Manager"}
                    }
                />
            </div>
        </>
    )
}