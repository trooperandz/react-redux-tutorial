/** State argument is not application state; only the state
 * that this reducer is responsible for.
 * Note the state = null assignment;  this is ES6 for "If state
 * is undefined, set it == null"
 */
export default function(state = null, action) {
    switch(action.type) {
      case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}