import React from "react";

type LightTank = {
  type: "lightTank";
  mobility: number;
  name: string;
  color: "Camo" | "Green";
  turretRotation: boolean;
};

type HeavyTank = {
  type: "heavyTank";
  armor: number;
  name: string;
  color: "Camo" | "Green";
  turretRotation: boolean;
};

type Tank = LightTank | HeavyTank;

type Cars = {
  type: "car";
  doors: number;
  wheels: number;
  color: string;
  name: string;
  towbar: boolean;
};

type Motorbikes = {
  type: "motorbike";
  wheels: number;
  name: string;
  color: string;
};

type Boat = {
  type: "boat";
  name: string;
  color: string;
  EngineOutside: boolean;
  sails: boolean;
};

type Vehicle = Cars | Motorbikes | Boat | Tank;

const vehicles: Vehicle[] = [
  {
    type: "car",
    doors: 4,
    wheels: 4,
    color: "red",
    name: "Volvo v90",
    towbar: true,
  },
  {
    type: "motorbike",
    wheels: 2,
    name: "Yamaha",
    color: "Green",
  },
  {
    type: "boat",
    name: "Sailboat",
    color: "white",
    EngineOutside: false,
    sails: true,
  },
  {
    type: "lightTank",
    mobility: 75,
    name: "German Panzer I",
    color: "Camo",
    turretRotation: true,
  },
  {
    type: "heavyTank",
    armor: 100,
    name: "The German Panzerkampfwagen VIII Maus",
    color: "Green",
    turretRotation: false,
  },
];

const VehiclesList = ({ vehicle }: { vehicle: Vehicle }) => {
  switch (vehicle.type) {
    case "car":
      return (
        <div className="vehicle-card">
          <h3>{vehicle.name} (Car)</h3>
          <p>Color: {vehicle.color}</p>
          <p>Doors: {vehicle.doors}</p>
          <p>Towbar: {vehicle.towbar ? "Yes" : "No"}</p>
        </div>
      );
    case "motorbike":
      return (
        <div className="vehicle-card">
          <h3>{vehicle.name} (Motorbike)</h3>
          <p>Color: {vehicle.color}</p>
          <p>Wheels: {vehicle.wheels}</p>
        </div>
      );
    case "boat":
      return (
        <div className="vehicle-card">
          <h3>{vehicle.name} (Boat)</h3>
          <p>Color: {vehicle.color}</p>
          <p>Engine Outside: {vehicle.EngineOutside ? "Yes" : "No"}</p>
          <p>Sails: {vehicle.sails ? "Yes" : "No"}</p>
        </div>
      );
    case "lightTank":
      return (
        <div className="vehicle-card">
          <h3>{vehicle.name} (Light Tank)</h3>
          <p>Color: {vehicle.color}</p>
          <p>Mobility: {vehicle.mobility}</p>
          <p>Turret Rotation: {vehicle.turretRotation ? "Yes" : "No"}</p>
        </div>
      );
    case "heavyTank":
      return (
        <div className="vehicle-card">
          <h3>{vehicle.name} (Heavy Tank)</h3>
          <p>Color: {vehicle.color}</p>
          <p>Armor: {vehicle.armor}</p>
          <p>Turret Rotation: {vehicle.turretRotation ? "Yes" : "No"}</p>
        </div>
      );
    default:
      return <div>Unknown Vehicle</div>;
  }
};

const Vehicles = () => {
  return (
    <div>
      <h2>Vehicles</h2>
      {vehicles.map((vehicle, index) => (
        <VehiclesList key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default Vehicles;
