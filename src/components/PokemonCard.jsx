export const PokemonCard = ({ title, subtitle, image, buttonLabel }) => {
  return (
    <div className="custom-card">
      <div class="nameimageinfo redorange">
        {/* <!-- Name and basic stats --> */}
        <table class="nameheaders">
          <tr>
            <td class="name">Charmander</td>
          </tr>
        </table>

        {/* <!-- Image and description --> */}
        <img src={image} />
        <br />
        {/* <!-- Border around the animal's information per requirement --> */}
        <div class="infoonly">
          {/* <!-- "interesting fact" --> */}
          <p class="description">Lizard Pokémon. Length: 2'0", Weight: 19 lbs.</p>

          <div style={{ display: "flex", flexDirection: "column", alignContent: "space-between" }}>
            <div style={{alignSelf: "flex-start"}}>
              {/* <!-- Attacks --> */}
              <table class="stats">
                <tr>
                  <td class="energy">☻</td>
                  <td class="attackdescCENTER">
                    <span class="label">Scratch</span>
                  </td>
                  <td class="damage">10</td>
                </tr>
              </table>
              <table class="stats">
                <tr>
                  <td class="energy">☻ ☻</td>
                  <td class="attackdesc">
                    <span class="label">Ember</span>{" "}
                  </td>
                  <td class="damage">30</td>
                </tr>
              </table>
              <table class="costs">
                <tr class="costheaders">
                  <td>popularity</td>
                  <td>&nbsp;</td>
                  <td>followers</td>
                </tr>
                <tr class="costicons">
                  <td>☻</td>
                  <td></td>
                  <td>☻</td>
                </tr>
              </table>
              {/* <!-- Bottom Description --> */}
              {/* <!-- This is the list for the purposes of following the exercise instructions to have a list :D --> */}

              {/* <!-- "interesting fact" --> */}
            </div>

            <div style={{alignSelf: "flex-end"}}>
              <ul>
                <li class="italicize">
                  Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of
                  its tail. &nbsp; LV. 10 &nbsp; #4
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
