    $(document).ready(function(){
        var template = $("#template").html();
        Mustache.parse(template);

        var rendered = Mustache.render(template, {
            event: [
                {
                date: "12/8/2018",
                startTime: "8:00am",
                endTime: "2:00pm",
                name: "Give a Blanket Day",
                location: "Armory Park"
            },
                {
                date: "12/10/2018",
                startTime: "9:00am",
                endTime: "1:00pm",
                name: "Housing Services",
                location: "Community Aide Services"
            },
                {
                date: "12/11/2018",
                startTime: "8:00am",
                endTime: "4:00pm",
                name: "Food & Clothing Drive",
                location: "Community Aide Services"
            },
                {
                date: "12/14/2018",
                startTime: "10:00am",
                endTime: "3:00pm",
                name: "Job Fair",
                location: "Community Convention Center"
            },
                {
                date: "12/18/2018",
                startTime: "11:00am",
                endTime: "3:00pm",
                name: "Holiday Feast",
                location: "Salvation Army"
            },
                {
                date: "12/22/2018",
                startTime: "10:00am",
                endTime: "2:00pm",
                name: "Children's Holiday Celebration",
                location: "Community Aide Services"
            },
        ],

            show: true
        })
        $("#target").html(rendered);
    });                                
    
