"use client";

import { Badge, Button, Card, Grid, Input, Rating, Select, Stack, Text , Tabs} from "@/components/ui";
import { BarGraph } from "@/components/ui/bar-graph";
export default function Page() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
    <Stack direction="vertical" gap="md">
      <Card title="Sustainability Platform" description="Carbon Estimation, Material Recommendations & Green Tech Solutions" centered maxWidth="full" />
      <Tabs tabs={[{ label: "Carbon Estimation", value: "carbon" }, { label: "Material Recommendation", value: "materials" }, { label: "Green Tech", value: "greentech" }]} defaultValue="carbon" value={{ $bindState: "/activeModule" }} />
      <Stack direction="vertical" gap="lg">
        <Card title="Material Carbon Estimation Engine" description="Calculate the carbon footprint of your materials" maxWidth="full">
          <Stack direction="vertical" gap="md">
            <Select label="Select Material" name="material" options={["Aluminum", "Steel", "Concrete", "Plastic", "Wood", "Glass", "Copper", "Cement"]} placeholder="Choose a material..." value={{ $bindState: "/carbonForm/material" }} checks={[{ type: "required", message: "Material selection is required" }]} />
            <Input label="Quantity" name="quantity" type="number" placeholder="Enter quantity..." value={{ $bindState: "/carbonForm/quantity" }} checks={[{ type: "required", message: "Quantity is required" }, { type: "min", message: "Quantity must be positive", args: { min: 0.1 } }]} />
            <Select label="Unit of Measurement" name="unit" options={["kg", "tonnes", "lbs", "grams"]} value={{ $bindState: "/carbonForm/unit" }} checks={[{ type: "required", message: "Unit is required" }]} />
            <Button label="Calculate Carbon Footprint" variant="primary" />
          </Stack>
          <Stack direction="vertical" gap="md">
            <Card title="Estimation Results" description="Your carbon footprint calculation">
              <Stack direction="vertical" gap="sm">
                <Text text={{ $template: "Material: ${/carbonResults/material}" }} variant="body" />
                <Text text={{ $template: "Quantity: ${/carbonResults/quantity} ${/carbonResults/unit}" }} variant="body" />
                <Stack direction="horizontal" gap="md" align="center">
                  <Text text="CO₂ Emission:" variant="lead" />
                  <Text text={{ $state: "/carbonResults/carbonEmission" }} variant="lead" />
                  <Text text="kg CO₂e" variant="lead" />
                </Stack>
                <Text text="Equivalent to driving 100 miles in a car" variant="muted" />
              </Stack>
            </Card>
            <Card title="Carbon Comparison" description="How your material compares">
              <BarGraph title="Material Carbon Intensity (kg CO₂e per kg)" data={[{ label: "Aluminum", value: 12.5 }, { label: "Steel", value: 2.1 }, { label: "Concrete", value: 0.15 }, { label: "Plastic", value: 5.8 }, { label: "Wood", value: 0.5 }]} />
            </Card>
          </Stack>
        </Card>
        <Card title="Sustainable Material Recommendation AI" description="Get AI-powered recommendations for eco-friendly alternatives" maxWidth="full">
          <Stack direction="vertical" gap="md">
            <Select label="Current Material in Use" name="currentMaterial" options={["Aluminum", "Steel", "Concrete", "Plastic", "Glass", "Copper"]} placeholder="Select your current material..." value={{ $bindState: "/recommendationForm/currentMaterial" }} checks={[{ type: "required", message: "Current material is required" }]} />
            <Select label="Budget Constraint" name="budget" options={["Low", "Medium", "High", "No Limit"]} value={{ $bindState: "/recommendationForm/budget" }} checks={[{ type: "required", message: "Budget selection is required" }]} />
            <Button label="Get Recommendations" variant="primary" />
          </Stack>
          <Stack direction="vertical" gap="md">
            <Card title="Recycled Aluminum" description="High-performance alternative with 95% lower carbon footprint">
              <Stack direction="vertical" gap="sm">
                <Stack direction="horizontal" gap="md" align="center">
                  <Text text="Carbon Reduction:" variant="body" />
                  <Badge text="95%" variant="success" />
                </Stack>
                <Text text="Cost: 15% premium | Availability: High" variant="muted" />
                <Rating value={5} max={5} label="Sustainability Score" />
              </Stack>
            </Card>
            <Card title="Bio-based Plastic" description="Plant-derived plastic with biodegradable properties">
              <Stack direction="vertical" gap="sm">
                <Stack direction="horizontal" gap="md" align="center">
                  <Text text="Carbon Reduction:" variant="body" />
                  <Badge text="72%" variant="success" />
                </Stack>
                <Text text="Cost: 8% premium | Availability: Medium" variant="muted" />
                <Rating value={4.5} max={5} label="Sustainability Score" />
              </Stack>
            </Card>
            <Card title="Certified Sustainable Wood" description="FSC-certified timber from managed forests">
              <Stack direction="vertical" gap="sm">
                <Stack direction="horizontal" gap="md" align="center">
                  <Text text="Carbon Reduction:" variant="body" />
                  <Badge text="88%" variant="success" />
                </Stack>
                <Text text="Cost: 5% premium | Availability: High" variant="muted" />
                <Rating value={4.8} max={5} label="Sustainability Score" />
              </Stack>
            </Card>
          </Stack>
        </Card>
        <Card title="Green Tech Solutions" description="Explore sustainable technology innovations" maxWidth="full">
          <Grid columns={2} gap="md">
            <Card title="Solar Panel Technology" description="Advanced photovoltaic systems">
              <Stack direction="vertical" gap="sm">
                <Text text="Convert sunlight to clean energy with 22% efficiency. Reduce grid dependency by up to 80%." variant="body" />
                <Badge text="Mature" variant="success" />
                <Button label="Learn More" variant="secondary" />
              </Stack>
            </Card>
            <Card title="Wind Energy Systems" description="Renewable power generation">
              <Stack direction="vertical" gap="sm">
                <Text text="Harness wind power with turbines rated 5-15MW. Zero operational emissions with 25-year lifespan." variant="body" />
                <Badge text="Mature" variant="success" />
                <Button label="Learn More" variant="secondary" />
              </Stack>
            </Card>
            <Card title="Carbon Capture Technology" description="Direct air capture systems">
              <Stack direction="vertical" gap="sm">
                <Text text="Remove CO₂ directly from atmosphere at 1 tonne per day capacity. Store or utilize captured carbon." variant="body" />
                <Badge text="Emerging" variant="warning" />
                <Button label="Learn More" variant="secondary" />
              </Stack>
            </Card>
            <Card title="Smart Grid Management" description="AI-powered energy distribution">
              <Stack direction="vertical" gap="sm">
                <Text text="Optimize energy distribution with AI. Reduce waste by 15-20% and integrate renewable sources seamlessly." variant="body" />
                <Badge text="Mature" variant="success" />
                <Button label="Learn More" variant="secondary" />
              </Stack>
            </Card>
          </Grid>
        </Card>
      </Stack>
    </Stack>
    </div>
  );
}
