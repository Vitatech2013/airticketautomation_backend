import User from '../Comman/userModel';
import flight from '../Comman/flightModel';
import book from '../Comman/bookingModel';
import {sendEmail} from '../Comman/email';

export const userLogins = (req, res) => {
  User.findOne({ "UserName": req.query.UserName, "Password": req.query.Password }, (err, result) => {
    res.send(result);
  })
}

export const registration = (req, res) => {

  User.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}



export const Showregs = (req, res) => {
  User.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const forgotpassword = (req, res) => {
  User.find({"Emailid":req.query.Emailid}, (err, result) => {
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
export const updateProfile = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewProfile = (req, res) => {
  User.find({ "UserName": req.query.UserName }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const showflights = (req, res) => {
  flight.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const bookingflights = (req, res) => {

  book.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}
export const Showbooking = (req, res) => {
  book.find({ "Status": "Booking","UserName": req.query.UserName }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const updatestatus = (req, res) => {
  book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const ShowReservation = (req, res) => {
  book.find({ "Status": "Payment", "UserName":req.query.UserName }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const showCancelReservation = (req, res) => {
  book.find({ "Status": "Cancel", "UserName":req.query.UserName }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const searchFlights = (req, res) => {
  flight.find({ "Source": req.query.Source, "Destination": req.query.Destination }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}