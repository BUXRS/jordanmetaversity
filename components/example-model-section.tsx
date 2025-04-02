"use client"

import { useState } from "react"
import ModelViewer from "./model-viewer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ExampleModelSection() {
  const [activeModel, setActiveModel] = useState("duck")

  const models = {
    duck: {
      url: "https://static.wixstatic.com/3d/7d95e2_0f2703cabb42420391bbb5076070f950.glb",
      downloadUrl: "https://static.wixstatic.com/3d/7d95e2_0f2703cabb42420391bbb5076070f950.glb",
      downloadFileName: "DuckModel.glb",
      title: "Duck Model",
      description: "A 3D model of a yellow rubber duck, perfect for testing 3D rendering capabilities.",
    },
    // Add more models as needed
  }

  const currentModel = models[activeModel as keyof typeof models]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Interactive 3D Models</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our interactive 3D models. Click and drag to rotate, scroll to zoom, and download for your own
          projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <ModelViewer
                modelUrl={currentModel.url}
                downloadUrl={currentModel.downloadUrl}
                downloadFileName={currentModel.downloadFileName}
                height={400}
              />
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{currentModel.title}</h3>
            <p className="text-muted-foreground mb-6">{currentModel.description}</p>
            <div className="flex flex-col gap-4">
              <Button variant="outline" onClick={() => setActiveModel("duck")}>
                View Duck Model
              </Button>
              {/* Add more buttons for other models */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

