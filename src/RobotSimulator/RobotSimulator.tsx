import React, { FunctionComponent, useRef, useEffect } from "react";
import "./RobotSimulator.css";
import { RobotHandle } from "@fruk/simulator-core/dist/engine/handles";
import { useSelector } from "react-redux";
import { getMotorPower } from "./robotSimulatorSlice";
import { getArenaNames } from "./ArenaConfigLoader";
import { useVM } from "../JavascriptVM/JavascriptVM";

// This component coordinates between react html and the canvas. It uses the 3DSim class to handle the 3D scene and
// proxies all required events from the browsers into the simulation. All react redux integration is done at this level.
export const RobotSimulator: FunctionComponent = () => {
  const canvasParentRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<RobotHandle | null>(null);

  const leftMotorPower = useSelector(getMotorPower(0));
  const rightMotorPower = useSelector(getMotorPower(1));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const vm = useVM();

  // effect to initialize the simulator on first mount
  useEffect(() => {
    let canvasEl = canvasRef.current!;
    vm.onCanvasCreated(canvasEl);
    return () => {
      vm.onCanvasDestroyed(canvasEl);
    };
  });

  // effect to set the arena
  useEffect(() => {
    vm.setArena(getArenaNames()[0]);
  }, [vm]);

  useEffect(() => {
    console.log("updating", leftMotorPower, rightMotorPower);
    robotRef.current?.setMotorPower(0, leftMotorPower);
    robotRef.current?.setMotorPower(1, rightMotorPower);
  }, [leftMotorPower, rightMotorPower]);

  return (
    <div className="robot-simulator" ref={canvasParentRef}>
      <canvas className="simulator" ref={canvasRef}>
        Canvas is not supported in your browser, try another
      </canvas>
    </div>
  );
};
