// Components
import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,

    // Wildcard parameter
    // Included twice to match both `/About` (and nothing after) and `/About/*` (with anything after)   
    '/About': About,
    '/About/*': About,

    // Catch-all, must be last
    '*': NotFound,
}