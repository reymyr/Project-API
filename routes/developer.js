const db = require("../models");
const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/developers
router.get("/", auth, async (req, res) => {
  const developers = await db.Developer.findAll();
  res.json(developers);
});

// GET /api/developers/:id
router.get("/:id", auth, async (req, res) => {
  const developer = await db.Developer.findByPk(req.params.id);

  if (!developer) {
    return res.status(404).json({ message: "Developer not found" });
  }

  res.json(developer);
});

// POST /api/developers
router.post("/", auth, async (req, res) => {
  try {
    const developer = await db.Developer.create(req.body);
    res.status(201).json(developer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/developers/:id
router.put("/:id", auth, async (req, res) => {
  const developer = await db.Developer.findByPk(req.params.id);

  if (!developer) {
    return res.status(404).json({ message: "Developer not found" });
  }

  try {
    developer.update(req.body);
    res.json(developer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/developers/:id
router.delete("/:id", auth, async (req, res) => {
  const developer = await db.Developer.findByPk(req.params.id);

  if (!developer) {
    return res.status(404).json({ message: "Developer not found" });
  }

  try {
    developer.destroy();
    res.json(developer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/developers/:id/projects
router.get("/:id/projects", async (req, res) => {
  const developerProjects = await db.ProjectDevs.findAll({
    where: { developerId: req.params.id },
  })
  res.json(developerProjects)
})

// POST /api/developers/:id/projects
router.post("/:id/projects", async (req, res) => {
  const developer = await db.Developer.findByPk(req.params.id);

  if (!developer) {
    return res.status(404).json({ message: "Developer not found" });
  }

  const project = await db.Project.findByPk(req.body.projectId);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  try {
    const newProject = await db.ProjectDevs.create({
      developerId: developer.id,
      projectId: project.id
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

})

module.exports = router;
