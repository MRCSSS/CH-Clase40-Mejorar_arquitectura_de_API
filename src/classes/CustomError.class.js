class CustomError {
    constructor(code, description, detail){
        this.code = code;
        this.description = description;
        this.detail = detail;
    }
}

export default CustomError;

// switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
