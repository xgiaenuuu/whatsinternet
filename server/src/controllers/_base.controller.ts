import { Router } from "express";

export default abstract class Controller{
    public abstract path: string;
    public abstract router: Router;
    public abstract intializeRoutes(): void;
}