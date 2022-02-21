let is_resolve = true;

const CustomFetch = (timeout, data) => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (is_resolve) {
                    resolve(data);
               } else {
                    reject('Ocurrió un error!');
               }
          }, timeout);
     });
}

export default CustomFetch;