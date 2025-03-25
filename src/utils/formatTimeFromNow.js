import moment from "moment";
import "moment/locale/vi";
 
const formatTimeFromNow = (time) => moment(time).fromNow();

export default formatTimeFromNow;
