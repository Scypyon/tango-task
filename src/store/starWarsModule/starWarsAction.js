import axios from "axios";

export const IS_FETCHING = "heroes:IS_FETCHING";
export const FETCHING_SUCCEED = "heroes:FETCHING_SUCCEED";
export const FETCHING_FAILED = "heroes:FETCHING_FAILED";

const isFetching = { type: IS_FETCHING };
const fetchingSucceed = data => ({ type: FETCHING_SUCCEED, data });
const fetchingFailed = error => ({ type: FETCHING_FAILED, error });

export const fetchHomeworld = heroes => async dispatch => {
  const herosWithPlanet = [];
  for (const hero of heroes) {
    const {
      data: { name }
    } = await axios.get(hero.homeworld);

    herosWithPlanet.push({
      name: hero.name,
      height: hero.height,
      gender: hero.gender,
      homeworld: name
    });
  }
  dispatch(fetchingSucceed(herosWithPlanet));
};

export const fetchHeroes = async dispatch => {
  try {
    dispatch(isFetching);
    const { data } = await axios.get("https://swapi.co/api/people/");
    dispatch(fetchHomeworld(data.results));
  } catch (error) {
    dispatch(fetchingFailed(error));
  }
};
