

function getDate(){
    const date = new Date();

    let Day = date.getDate();
    let Month = date.getMonth() +1;
    let Year = date.getFullYear();

    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let ms = date.getMilliseconds();

    return {
        Day:Day,
        Month:Month,
        Year:Year,
        Hours:Hours,
        Minutes:Minutes,
        Seconds:Seconds,
        ms:ms,
        }


    };


export default getDate;