import dollar from './dollar.png';
import list from './list.png';
import wallet from './wallet.png';
import bag from './bag.png';
const Reports = [
    {
        
        image:dollar,
        title:'Earning',
        amount:'$198k',
        sign:'+ve',
        percent:'37.8%',
        time:'this month',
        color:'light-green',

    },
    {
        image:list,
        title:'Orders',
        amount:'$2.4k',
        sign:'-ve',
        percent:'2%',
        time:'this month',
        color:'light-purple',

    },
    {
        image:wallet,
        title:'Balance',
        amount:'$2.4k',
        sign:'-ve',
        percent:'2%',
        time:'this month',
        color:'light-blue',

    },
    {
        image:bag,
        title:'Total Sales',
        amount:'$89k',
        sign:'+ve',
        percent:'11%',
        time:'this week',
        color:'light-red',

    }
]
export default Reports;