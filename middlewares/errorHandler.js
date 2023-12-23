const errHandler=(err, req, res, next) => {
    // (process.env.NODE_ENV == 'dev') ? res.status(err.status).json({ success: 0, message: err.message, stack: err.stack })
    //    : res.status(err.status).json({ success: 0, message: err.message })

       res.locals.message = err.message;
       res.locals.error = req.app.get('env') === 'development' ? err : {};
     
       // render the error page
       res.status(err.status || 500);
       res.render('error');
   }
   module.exports=errHandler