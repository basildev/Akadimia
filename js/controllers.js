angular.module("myApp")
    .controller("appCtrl",function ($scope,$rootScope,$mdDialog) {
        $(document).ready(function(){
            $('#b1').click(function(){
                $('#c1').removeClass('uk-child-width-1-3').fadeOut('slow');
                $('#c1').addClass('uk-child-width-1-1').fadeIn('slow')
            });
            $('#b2').click(function(){
                $('#c1').removeClass('uk-child-width-1-1').fadeOut('slow');
                $('#c1').addClass('uk-child-width-1-3').fadeIn('slow')
            });

        })

    })
    .controller("coursesCtrl",function($scope,$rootScope,$state){
        $(document).ready(function(){
            $('#b1').click(function(){
                $('#c1').removeClass('uk-child-width-1-3').fadeOut('slow');
                $('#c1').addClass('uk-child-width-1-1').fadeIn('slow')
            });
            $('#b2').click(function(){
                $('#c1').removeClass('uk-child-width-1-1').fadeOut('slow');
                $('#c1').addClass('uk-child-width-1-3').fadeIn('slow')
            });

        });
        $scope.courses=[
            <!--DESIGN-->
            {datatags:"time level price type",cls:"tag-begin tag-W2 tag-1 tag-C",time:"25.5h",img:"indesign.jpg",title:"InDesign CC 2020 MasterClass",body:"This is a free preview of our Data Foundations Nanodegree program! This program is perfect for beginners.",price:"40.99"},
            {datatags:"time level price type",cls:"tag-med tag-W1 tag-2 tag-C",time:"30h",img:"uiux.jpg",title:"User Experience Design Essentials - Adobe XD UI UX Design",body:"Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design",price:"140.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W2 tag-3 tag-C",time:"19.5h",img:"great-design.jpg",title:"Graphic Design Masterclass - Learn GREAT Design",body:"The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign,Design Theory, Branding and Logo Design",price:"149.99"},
            {datatags:"time level price type",cls:"tag-med tag-W2 tag-2 tag-C",time:"15h",img:"learn-figma.jpg",title:"Learn Figma - UI/UX Design Essential Training",body:"Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach.",price:"99.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W1 tag-1 tag-C",time:"9h",img:"design-3d.jpg",title:"Designing for 3D Printing with Fusion 360",body:"Learn to design for 3D printing with my easy to follow video lessons using Fusion 360",price:"129.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W3 tag-3 tag-C",time:"30h",img:"thinking-3stp.jpg",title:"Design Thinking in 3 Steps",body:"Understand your audience, envision a creative solution, and test your prototype",price:"189.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W2 tag-3 tag-C",time:"19.5h",img:"3d-max.jpg",title:"3ds Max + V-Ray: 3ds Max PRO in 6 hrs",body:"3ds Max intro course: 3Ds Max and V-Ray for creating 3D architectural imagery, from beginner to advanced",price:"119.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W1 tag-1 tag-C",time:"68h",img:"learn-3d.jpg",title:"Complete Blender Creator: Learn 3D Modelling for Beginners",body:"Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course",price:"149.99"},
            <!--DESIGN-->

            <!--IT-->
            {datatags:"time level price type",cls:"tag-med tag-W2 tag-1 tag-A",time:"12.5h",img:"az-104.jpg",title:"AZ-104 Microsoft Azure Administrator Exam Certification 2020",body:"Prove your AZ-104 Microsoft Azure Administrator skills to the world. Updated as of Aug 2020.",price:"39.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W2 tag-3 tag-A",time:"11.5h",img:"linux-mastrery.jpg",title:"Linux Mastery: Master the Linux Command Line in 11.5 Hours",body:"Learn the Linux Command Line from Scratch and Improve your Career with the World's Most Fun Project-Based Linux Course!",price:"139.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W1 tag-3 tag-A",time:"9h",img:"webhack.jpg",title:"Website Hacking / Penetration Testing & Bug Bounty Hunting",body:"Become a bug bounty hunter! Hack websites & web applications like black hat hackers and secure them like experts.",price:"179.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W2 tag-3 tag-A",time:"16.5h",img:"cyber.jpg",title:"The Complete Cyber Security Course : End Point Protection!",body:"Volume 4 :Become a Cyber Security Specialist, Antivirus & Malware, Disk Encryption, Finding & Removing Hackers & Malware",price:"129.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W1 tag-2 tag-A",time:"9.5h",img:"az-900.jpg",title:"Microsoft Azure - Beginner's Guide + AZ-900 - UPDATED 2020",body:"Beginning your journey on Microsoft Azure + 180 practice questions on AZ-900 certification exam",price:"94.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W3 tag-1 tag-A",time:"21h",img:"ccna-301.jpg",title:"Cisco CCNA Packet Tracer Ultimate labs: CCNA 200-301 labs",body:"Are you ready for the new Cisco CCNA 200-301 exam? You sure? Check your knowledge with our CCNA Exam Prep Labs.",price:"19.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W3 tag-1 tag-A",time:"30h",img:"a220.jpg",title:"TOTAL: CompTIA A+ Certification (220-1002)",body:"Course 2: Everything you need to pass the A+ Certification Core 2 (220-1002) Exam, from Mike Meyers and Total Seminars.",price:"0.00"},
            {datatags:"time level price type",cls:"tag-med tag-W2 tag-2 tag-A",time:"22h",img:"n10.jpg",title:"TOTAL: CompTIA Network+ Certification (N10-007)",body:"Everything you need to pass the CompTIA Network+ Exam (N10-007) from Mike Meyers, CompTIA expert and bestselling author.",price:"94.99"},
            <!--IT-->

            <!--MARKETING-->
            {datatags:"time level price type",cls:"tag-exp tag-W2 tag-3 tag-B",time:"23h",img:"mark1.jpg",title:"The Complete Digital Marketing Course - 12 Courses in 1",body:"Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",price:"149.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W3 tag-3 tag-B",time:"25.5h",img:"mark2.jpg",title:"Ultimate Google Ads Training 2020: Profit with Pay Per Click",body:"Google Ads 2020: How our clients have transformed their sales using Google Ads & get your Google Ads certification!",price:"159.90"},
            {datatags:"time level price type",cls:"tag-begin tag-W2 tag-2 tag-B",time:"12.5h",img:"mark3.jpg",title:"Facebook Ads & Facebook Marketing MASTERY 2020 | Coursenvy ®",body:"Facebook Marketing from beginner to advanced! Join 100,000+ students who MASTERED Facebook and are Facebook Ads experts!",price:"139.99"},
            {datatags:"time level price type",cls:"tag-begin tag-W1 tag-2 tag-B",time:"5.5h",img:"mark4.jpg",title:"Instagram Marketing 2020: Complete Guide To Instagram Growth",body:"Attract Hyper-Targeted Instagram Followers, Convert Followers to Paying Customers, & Expand your Brand Using Instagram",price:"100.00"},
            {datatags:"time level price type",cls:"tag-exp tag-W1 tag-3 tag-B",time:"8h",img:"mark5.jpg",title:"Social Media Marketing MASTERY | Learn Ads on 10+ Platforms",body:"MASTER online marketing on Twitter, Pinterest, Instagram, YouTube, Facebook, Google and more ad platforms! Coursenvy ®",price:"149.99"},
            {datatags:"time level price type",cls:"tag-exp tag-W1 tag-3 tag-B",time:"2h",img:"mark6.jpg",title:"Google Analytics Certification: Become Certified & Earn More",body:"Become Google Analytics Certified to Land a Job, Get Promoted or Start a New Career in Digital Marketing! 2020 Guide",price:"174.99"},
            {datatags:"time level price type",cls:"tag-med tag-W1 tag-1 tag-B",time:"3.5h",img:"mark7.jpg",title:"Business Branding: The Complete Course Part 1 - Strategy",body:"Business Branding: The Complete Course Part 1 - Strategy",price:"129.99"},
            {datatags:"time level price type",cls:"tag-med tag-W2 tag-1 tag-B",time:"5.5h",img:"mark8.jpg",title:"YouTube Masterclass - Your Complete Guide to YouTube",body:"Complete guide to starting a YouTube channel, getting more views & subscribers, and building a brand with videos!",price:"139.99"}
            <!--MARKETING-->

        ];
    })
    .controller("aboutCtrl",function ($scope,$uibModal,$rootScope,$state,$mdDialog,$mdSidenav) {

    });

