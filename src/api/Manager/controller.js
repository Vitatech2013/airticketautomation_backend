import flight from '../Comman/flightModel';
import Viewusers from '../Comman/userModel';
import booking from '../Comman/bookingModel';
import Addmanager from './managerModel';
import {sendEmail} from '../Comman/email';


export const Addflights = (req, res) => {
  flight.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const Showflights = (req, res) => {
  flight.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const deleteflights = (req, res) => {
  flight.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      flight.find({}, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
        }
      })
    }
  })
}

export const updateflights = (req, res) =>{
  flight.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedObj) => {
    if (err) {
        res.send(err);
    } else {
      flight.find((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    }

})
}
export const Showusers = (req, res) => {
  Viewusers.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const addmanager = (req, res) => {
  Addmanager.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
      console.log(err)
    } else {
      res.send(result);
    }
  })
}

export const forgotpassword = (req, res) => {
  Addmanager.find({"Emailid":req.query.Emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `UserName: ${results.UserName}<br>Password: ${results.Password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.Emailid, subject, body);
      })
      res.send(result);
    }
  })
}

export const managerlogin = (req, res) => {
  Addmanager.findOne({ "UserName": req.query.UserName, "Password": req.query.Password }, (err, result) => {
    res.send(result);
  })
}
export const updatepassword = (req, res) =>{
  Addmanager.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      Addmanager.find((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    }

})
}

export const ShowReservation = (req, res) => {
  booking.find({ "Status": "Payment" }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const showCancelReservation = (req, res) => {
  booking.find({ "Status": "Cancel" }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}


