import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import React from 'react'

function Featured({type}) {
  return (
    <div className="featured">
      {
        type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">
                Adventure
              </option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thirller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )
      }
          <img src="https://wallpaperaccess.com/full/6293001.jpg" alt="" />
          <div className="info">
              <img src="https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Symbol.png" alt="" />
              <span className="desc">The Straw Hat Pirates' first foray into the New World sends them to an island of fire and ice where they battle Vice Admiral Smoker and attempt to solve the island's mysteries.</span>
              <div className="buttons">
                  <button className="play">
                      <PlayArrow />
                      <span>Play</span>
                  </button>
                  <button className="more">
                      <InfoOutlined />
                      <span>Info</span>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Featured

