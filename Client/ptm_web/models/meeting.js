/**
 * Created by DewmiR on 11/2/2016.
 */

'use strict';

var mongoose = require('mongoose');

var MeetingSchema = new mongoose.Schema({
    header: String,
    body: String,
    date: String,
    time : String,
    from : String,
    to : String,
    year :String,
    month:String,
    status:String
});

var Meeting = module.exports = mongoose.model('Meeting',MeetingSchema);

module.exports.createMeeting = function(meeting, callback){
    meeting.save(callback);
};

module.exports.getAllMeetings = function(from,year,callback){
    Meeting.find({from:from,year:year},callback);
};

module.exports.getMeetingsForMonth = function(user,year,month,callback){
    Meeting.find({from:user,year:year,month:month},callback);
};


module.exports.sendMeetingReq = function( callback){

};

module.exports.findMeetingByID = function(id,callback){
    Meeting.findById(id,callback);
};

module.exports.updateAppointment = function(_id,header,body,date,time,venue,callback){
    Meeting.update({ _id:_id},{ $set:{ header:header,body:body,date:date,time:time,venue:venue,status:"updated" }},callback);
};


