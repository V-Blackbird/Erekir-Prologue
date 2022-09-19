Events.run(EventType.ClientLoadEvent, () => {
    const node = (parent, contentType, requirements, objectives) => {
        const tnode = extend(TechTree.TechNode, parent.TechNode, contentType, requirements === null ? requirements: contentType.researchRequirements());
        let used = new ObjectSet();

        if (objectives != null) {
            tnode.objectives.addAll(objectives);
        };
    };

    const orbit = Vars.content.getByName(ContentType.planet, "orbit");

    const theOrbit = extend(SectorPreset, "theOrbit", orbit, 1, {
        enemyBase: true,
        localizedName: "The Orbit",
        difficulty: 10
    });

    node(Blocks.coreBastion, theOrbit, null, Seq.with(new Objectives.Research(Blocks.coreBastion)));

    node(theOrbit, SectorPresets.onset, null, Seq.with(new Objectives.SectorComplete(theOrbit), new Objectives.Research(Blocks.oreBeryllium)));
});
