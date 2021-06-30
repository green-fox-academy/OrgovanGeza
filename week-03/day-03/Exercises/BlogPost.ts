'use strict';

// Create a BlogPost class that has
    // an authorName
    // a title
    // a text
    // a publicationDate
// Create a few blog post objects:
    // "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
        // Lorem ipsum dolor sit amet.
    // "Wait but why" titled by Tim Urban posted at "2010.10.10."
        // A popular long-form, stick-figure-illustrated blog about almost everything.
    // "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
        // Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.


class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authorName:string, title:string, publDate:string, text: string, ) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publDate;
    }

    show():void{
        console.log('"',this.title,'"',' titled by ',this.authorName,' posted at ',this.publicationDate);
        //console.log(`${this.title} titled by ${this.authorName} posted at ${this.publicationDate}`);
        console.log(this.text, '\n');
    }
}

const post1 = new BlogPost('John Doe','Lorem Ipsum','2000.05.04.','Lorem ipsum dolor sit amet.');
const post2 = new BlogPost('Tim Urban','Wait but why','2010.10.10.','A popular long-form, stick-figure-illustrated blog about almost everything.');
const post3 = new BlogPost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump','2017.03.28.','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');

post1.show();
post2.show();
post3.show();
