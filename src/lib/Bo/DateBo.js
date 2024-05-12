const date=new Date();
let month=date.getMonth();
const months_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];



const getToday=()=>{
    return date.getDate()+"/"+months_names[date.getMonth()]+"/"+date.getFullYear;
}

const getTodayDate=()=>{
    return date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2);

}