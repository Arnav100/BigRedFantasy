const manager1 = {
    players: [
        {
            name: "Josh Allen",
            team: "Buffalo Bills",
            opponent: "MIA",
            points_scored: 47.82,
            points_projected: 22.3,
            passing_yards: 82,
            rush_td: 2,
            img: 'josh-allen.png',
            bg_color: '#00338D'
        },
        {
            name: "Najee Harris",
            team: "Pitts Steelers",
            opponent: "BENGALS",
            points_scored: 34.2,
            points_projected: 18.8,
            passing_yards: 12,
            rush_td: 1,
            img: 'najee.png',
            bg_color: '#FFB612'
        },
        {
            name: "Tyrkee Hill",
            team: "Miami Dolphins",
            opponent: "BILLS",
            points_scored: 38.4,
            points_projected: 23.1,
            passing_yards: 55,
            rush_td: 3,
            img: 'tyreek.png',
            bg_color: '#008E97'
        }
    ]
}


$(document).ready(() => {

    for (var player of manager1.players) {
        var card = `
                <div class="card text-bg-dark card-shadow player-card" style="width: 20rem;">
                        <div class="card-top card-img-top " style="position:relative; background-color: ${player.bg_color};">
                            <img src="${player.img}" class="img-fluid" style="z-index: 2;">
                        </div>
                        <div class="card-body  pt-3">
                            <div class=" justify-content-around pt-1" style="display: inline-block">
                                <h2 class="  " style="display: inline-block">${player.name}</h2>
                                <span class=" align-text-middle">${player.team}</span>
                            </div>
                            <ol class="list-group ">
                                <li
                                    class="list-group-item list-item-custom d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="stat fw-bold">Points Scored</div>
                                    </div>
                                    <span class="badge bg-success rounded-pill">${player.points_scored}</span>
                                </li>
                                <li
                                    class="list-group-item list-item-custom d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="stat fw-bold">Projected</div>
                                    </div>
                                    <span class="badge bg-warning rounded-pill">${player.points_projected}</span>
                                </li>

                                <li
                                    class="list-group-item list-item-custom d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold stat">Passing Yards</div>
                                    </div>
                                    <span class="badge bg-success rounded-pill">${player.passing_yards}</span>
                                </li>
                                <li
                                    class="list-group-item list-item-custom d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold stat">Rushing Touchdowns</div>
                                    </div>
                                    <span class="badge bg-success rounded-pill">${player.rush_td}</span>
                                </li>
                                <li
                                    class="list-group-item list-item-custom d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold stat">Opponent</div>
                                    </div>
                                    <span class="badge bg-primary rounded-pill">${player.opponent}</span>
                                </li>
                            </ol>
                        </div>
                    </div>
        `
        $("#manager-1").append(card)
    }

    $("#test").on("click", () => {
        $("#manager-1").removeClass("team-cards-collapse-left")
        $("#manager-1").addClass("team-cards-view")
    })
})