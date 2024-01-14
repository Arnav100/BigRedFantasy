from espn_api.football import League

s2 = "AEBIcgLEEuAAZjP8sixtQnnm9g%2FMTtNHMdqni9%2F2A4VI1Ei5jVnrUjGtqHbMT0MVs3BBYWMXAgU99RwSMtCQLpJxoXO9pB1ubZosdbAtBMEV0pSEcUGuiQRRRp7ZqFkr2b4ltL%2FHNZ%2BspMW%2FFYwgQ%2F7cCipYz3FbFwl6wmaUIGhd0XI5zcxTWRKwEONTQ7DTyb7J%2FOGNCCA25IgRWEy4qE0142kBhKamWDQlgDc%2FIjksw5y%2Br0NMktkAnaPdLiA2%2FaiSEJsSawnvdQxMISQ%2BCeTUi8jXueweP7IwUtWiXupdHp6OLBQTsxlkpNCxSbUcNAAxfedGurEIrlZSyZm8AoVd"
swid = "24664E13-D01D-495F-8B28-7B84E8BAF4B0"
league = League(league_id=569470731, year=2023, espn_s2= s2, swid=swid)

for box in league.box_scores(1):
    if box.home_team.team_abbrev in ['GRIM', "QPC"] or box.away_team.team_id in ['GRIM', 'QPC']:
        print(box.home_team.team_name + " " +  box.away_team.team_name)
        print(str(box.home_score) + " " + str(box.away_score))
        print("\n")
