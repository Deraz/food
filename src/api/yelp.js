import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer hmW6P4GaUMN-z7QOoBZJwAaAsATSxgEumso5kTy1JHYR5gmj9LhWhiPgaNco-4cjI7khqR4GNddNiffETxxFNCwOC-AVBdxDe3FD1UUjegStC2JIfGIqHTv-iCfwYHYx'
    }
})