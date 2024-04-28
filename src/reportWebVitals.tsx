// https://www.npmjs.com/package/web-vitals
// https://web.dev/articles/vitals
const reportWebVitals = onPerfEntry => {
    if ( onPerfEntry && onPerfEntry instanceof Function ) {
        import( 'web-vitals' ).then( ( { getCLS, getFID, getFCP, getLCP, getTTFB } ) => {
            getCLS( onPerfEntry );
            getFID( onPerfEntry );
            getFCP( onPerfEntry );
            getLCP( onPerfEntry );
            getTTFB( onPerfEntry );
        } );
    }
};

export default reportWebVitals;