const manager1 = {
    players: [
        {
            name: "Josh Allen",
            team: "Buffalo Bills",
            game_stats: {
                points_scored: 47.82,
                points_projected: 22.3,
                passing_yards: 82,
                rush_td: 2,
                opponent: "MIA",

            },
            img: 'josh-allen.png',
            bg_color: '#00338D'
        },
        {
            name: "Najee Harris",
            team: "Pitts Steelers",
            game_stats: {
                points_scored: 34.2,
                points_projected: 18.8,
                passing_yards: 12,
                rush_td: 1,
                opponent: "BENGALS",
            },
            img: 'najee.png',
            bg_color: '#FFB612'
        },
        {
            name: "Tyrkee Hill",
            team: "Miami Dolphins",
            game_stats: {
                points_scored: 38.4,
                points_projected: 23.1,
                passing_yards: 55,
                rush_td: 3,
                opponent: "BILLS",
            },
            img: 'tyreek.png',
            bg_color: '#008E97'
        }
    ]
}

const manager2 = {
    players: [
        {
            name: "Tyrkee Hill",
            team: "Miami Dolphins",
            game_stats: {
                points_scored: 38.4,
                points_projected: 23.1,
                passing_yards: 55,
                rush_td: 3,
                opponent: "BILLS",
            },
            img: 'tyreek.png',
            bg_color: '#008E97'
        },
        {
            name: "Josh Allen",
            team: "Buffalo Bills",
            game_stats: {
                points_scored: 47.82,
                points_projected: 22.3,
                passing_yards: 82,
                rush_td: 2,
                opponent: "MIA",

            },
            img: 'josh-allen.png',
            bg_color: '#00338D'
        },
        {
            name: "Najee Harris",
            team: "Pitts Steelers",
            game_stats: {
                points_scored: 34.2,
                points_projected: 18.8,
                passing_yards: 12,
                rush_td: 1,
                opponent: "BENGALS",
            },
            img: 'najee.png',
            bg_color: '#FFB612'
        },

    ]
}

const keyToPhrase = {
    points_scored: ["Points Scored", 'success'],
    points_projected: ["Projected", 'warning'],
    passing_yards: ["Passing Yards", 'success'],
    rush_td: ["Rushing Touchdowns", 'success'],
    opponent: ["Opponent", 'primary']
}


$(document).ready(() => {

    for (var player of manager1.players) {
        $("#manager-1").append(makeCard(player))
        $("#horizontal-test").append(makeHorizontalCard(player))

    }

    for (var player in manager2.players) {
        $("#manager-2").append(makeCard(manager2.players[player], manager2.players.length - player))
        $("#horizontal-test-2").append(makeHorizontalCard(manager2.players[player], true))

    }

    $("#test").on("click", () => {
        $(".scroll-buttons").remove()
        $("#spot1").removeClass("col-4")
        $("#spot1").addClass("col-12")
        $("#spot2").removeClass("col-4")
        $("#spot2").addClass("col-12")
        $("#manager-1").removeClass("team-cards-collapse-left")
        $("#manager-1").addClass("team-cards-view")
        $("#manager-2").removeClass("team-cards-collapse-right")
        $("#manager-2").addClass("team-cards-view")

    })
})

function makeHorizontalCard(player, reverse = false) {
    order = reverse ? 1 : 0

    return `
                <div class="card text-bg-dark card-shadow player-card my-4" style=" z-index: 1">
                    <div class="row">
                        <div class="col order-${1 + order}">
                            <img src="${player.img}" class="img-fluid rounded-start" style="height: 100%; width:40em; background-color: ${player.bg_color};">
                        </div>
                        <div class="col order-${2 - order}">
                            ${makeCardBody(player, reverse)}
                        </div>
                    </div>
                </div>
      `
}

function makeCard(player, z_index = 1) {
    return `
                <div class="card text-bg-dark card-shadow player-card" style="width: 20rem; z-index: ${z_index}">
                        <div class="card-top card-img-top " style="position:relative; background-color: ${player.bg_color};">
                            <img src="${player.img}" class="img-fluid"">
                        </div>
                        ${makeCardBody(player)}
                    </div>
        `
}

function makeCardBody(player, reverse = false) {

    var list = '<ol class="list-group ">'
    for (key in player.game_stats) {
        list += createStat(player.game_stats[key], keyToPhrase[key], reverse)
    }
    list += '</ol>'

    return `
        <div class="card-body  pt-3">
                            <div class=" justify-content-around pt-1" style="display: inline-block">
                                <h2 class="  " style="display: inline-block">${player.name}</h2>
                                <span class=" align-text-middle">${player.team}</span>
                            </div>
                            ${list}
                        </div>
    `
}

//Need a way to determine what color the badge is based off the stat type and the points associated with it
function createStat(player_stat, stat_info, reverse = false) {

    return `
            <li
                class="list-group-item list-item-custom d-flex align-items-start justify-content-between ${reverse ? "flex-row-reverse" : ""}">
                    <div class="fw-bold stat">${stat_info[0]}</div>
                <span class="badge bg-${stat_info[1]} rounded-pill d-inline-flex align-items-center justify-content-start data">${player_stat}</span>
            </li>
    `
}
