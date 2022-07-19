const db = require("../models");
const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/projects
router.get("/", auth, async (req, res) => {
  const projects = await db.Project.findAll();
  res.json(projects);
});

// GET /api/projects/:id
router.get("/:id", auth, async (req, res) => {
  const project = await db.Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.json(project);
});

// POST /api/projects
router.post("/", auth, async (req, res) => {
  try {
    const project = await db.Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/projects/:id
router.put("/:id", auth, async (req, res) => {
  const project = await db.Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  try {
    project.update(req.body);
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/projects/:id
router.delete("/:id", auth, async (req, res) => {
  const project = await db.Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  
  try {
    project.destroy();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
